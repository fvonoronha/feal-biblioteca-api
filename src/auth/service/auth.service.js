const { getSlug, getId } = require("../../utils/id.service");
const { getJWT, isJWTValid, getHeader } = require("../../utils/token.service");
const { compare, encrypt } = require("../../utils/cryptography.service");
const { db, parseError, unauthorizedError, notFoundError, withTransaction } = require("../../utils/db.service");
const { sendPasswordResetEmail } = require("../../utils/mail/mail.service");

const THIRTY_MINUTES_MS = 30 * 60 * 1000;
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const PASSWORD_RESET_TOKEN_LENGTH = 48;
const PASSWORD_RESET_EXPIRATION_MS = 60 * 60 * 1000; // 1 hora

// Busca um token de redefinição ainda utilizável (existe, não foi usado e não expirou).
// Centralizado aqui porque tanto a validação "silenciosa" quanto a troca de senha em si
// precisam exatamente da mesma checagem.
async function getUsableResetToken(token) {
    if (!token) return null;

    const resetToken = await db.passwordResetToken.findUnique({ where: { token } });

    if (!resetToken || resetToken.used_at || resetToken.expires_at < new Date()) {
        return null;
    }

    return resetToken;
}

const isTokenValidBasedOnKeep = (lastUsedAt, keep) => {
    const elapsedMs = Date.now() - new Date(lastUsedAt).getTime();
    return keep ? elapsedMs <= ONE_WEEK_MS : elapsedMs <= THIRTY_MINUTES_MS;
};

const getBearerToken = (req) => getHeader(req, "authorization")?.split(" ")[1];

module.exports = {
    // Calculado à parte (não embutido em login()/isAuth()) porque isAuth() também é usado
    // por requireAuth em toda rota privada - colocar essa consulta extra ali multiplicaria
    // uma query por request em toda a API. Só quem realmente precisa do aviso (o controller
    // de login e o de checkSession, chamados uma vez por sessão) pede isso explicitamente.
    async hasOverdueLoan(userId) {
        const result = await db.$queryRaw`SELECT EXISTS(
            SELECT 1 FROM volume_loan
            WHERE user_id = ${userId} AND return_date IS NULL AND status = 'A' AND due_date < now()
        ) as has_overdue_loan`;

        return !!result[0]?.has_overdue_loan;
    },


    async login(loginInfo, ip) {
        try {
            const user = await db.user.findUnique({
                where: { login: loginInfo.login },
                select: {
                    id: true,
                    slug: true,
                    created_at: true,
                    name: true,
                    display_name: true,
                    sex: true,
                    login: true,
                    status: true,
                    role: true,
                    password: true,
                    email: true,
                    phone: true,
                    document: true
                }
            });

            if (!user || user.status !== "A" || !(await compare(loginInfo.password, user.password))) {
                throw unauthorizedError("Login inválido");
            }

            delete user.password;

            const jwt = getJWT(user);

            const newToken = await db.userAuthToken.create({
                data: {
                    user_id: user.id,
                    slug: getSlug(),
                    created_ip: ip,
                    jwt_token: jwt.token,
                    jwt_secret: jwt.secret,
                    keep: !!loginInfo.keep
                },
                select: {
                    jwt_token: true,
                    keep: true,
                    status: true
                }
            });

            return {
                user,
                token: newToken
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async isAuth(req, ip) {
        try {
            const token = getBearerToken(req);

            if (!token || !isJWTValid(token)) {
                throw unauthorizedError("Sessão inválida");
            }

            const userToken = await db.userAuthToken.findFirst({
                where: { jwt_token: token, status: "A" },
                select: {
                    id: true,
                    keep: true,
                    created_at: true,
                    status: true,
                    last_used_at: true,
                    user: {
                        select: {
                            id: true,
                            slug: true,
                            created_at: true,
                            name: true,
                            display_name: true,
                            sex: true,
                            login: true,
                            status: true,
                            email: true,
                            phone: true,
                            document: true,
                            role: true
                        }
                    }
                }
            });

            if (!userToken || userToken.user.status !== "A") {
                throw unauthorizedError("Sessão inválida");
            }

            const lastActivity = userToken.last_used_at || userToken.created_at;

            if (!isTokenValidBasedOnKeep(lastActivity, userToken.keep)) {
                await db.userAuthToken.update({
                    where: { id: userToken.id },
                    data: { status: "E", updated_at: new Date() }
                });
                throw unauthorizedError("Sessão expirada");
            }

            await db.userAuthToken.update({
                where: { id: userToken.id },
                data: {
                    last_used_at: new Date(),
                    updated_at: new Date(),
                    last_used_ip: ip
                }
            });

            return {
                user: userToken.user,
                token: {
                    keep: userToken.keep,
                    status: userToken.status,
                    last_used_at: lastActivity,
                    last_used_ip: ip
                }
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async logout(req, ip) {
        try {
            const token = getBearerToken(req);

            if (!token) {
                throw unauthorizedError("Sessão inválida");
            }

            await db.userAuthToken.updateMany({
                where: { jwt_token: token, status: "A" },
                data: {
                    last_used_at: new Date(),
                    last_used_ip: ip,
                    updated_at: new Date(),
                    status: "I"
                }
            });

            return {};
        } catch (err) {
            return parseError(err);
        }
    },

    // Sempre responde com sucesso genérico (mesmo se o login não existir ou não tiver e-mail
    // cadastrado) - do contrário o endpoint vira um oráculo para descobrir quais CPFs estão
    // cadastrados no sistema.
    async requestPasswordReset(login, ip) {
        try {
            const user = await db.user.findUnique({
                where: { login },
                select: { id: true, name: true, email: true, status: true }
            });

            if (!user || user.status !== "A" || !user.email) {
                return { requested: true };
            }

            const token = getId(PASSWORD_RESET_TOKEN_LENGTH);
            const expiresAt = new Date(Date.now() + PASSWORD_RESET_EXPIRATION_MS);

            // Invalida qualquer token anterior ainda utilizável, para nunca ter mais de um
            // link de redefinição válido ao mesmo tempo para a mesma conta.
            await db.passwordResetToken.updateMany({
                where: { user_id: user.id, used_at: null },
                data: { used_at: new Date() }
            });

            await db.passwordResetToken.create({
                data: { user_id: user.id, token, expires_at: expiresAt, created_ip: ip }
            });

            const emailResult = await sendPasswordResetEmail(user, token, "1 hora");
            if (emailResult?.error) {
                console.error("[auth] Falha ao enviar e-mail de redefinição de senha:", emailResult.error);
            }

            return { requested: true };
        } catch (err) {
            return parseError(err);
        }
    },

    // Validação "silenciosa": usada pelo front para decidir, sem gastar o token, se deve
    // mostrar direto o formulário de nova senha (link do e-mail, ou token já guardado de uma
    // visita anterior) ou pedir para solicitar um novo link.
    async validateResetToken(token) {
        try {
            const resetToken = await getUsableResetToken(token);

            if (!resetToken) {
                throw notFoundError("Token inválido ou expirado");
            }

            return { valid: true };
        } catch (err) {
            return parseError(err);
        }
    },

    async resetPassword(token, password) {
        try {
            const resetToken = await getUsableResetToken(token);

            if (!resetToken) {
                throw notFoundError("Token inválido ou expirado");
            }

            const encryptedPassword = await encrypt(password);

            await withTransaction(async (tx) => {
                await tx.user.update({
                    where: { id: resetToken.user_id },
                    data: { password: encryptedPassword }
                });

                await tx.passwordResetToken.update({
                    where: { id: resetToken.id },
                    data: { used_at: new Date() }
                });

                // Redefinir a senha encerra todas as sessões ativas - se a troca foi motivada
                // por uma conta comprometida, isso derruba quem quer que esteja com o acesso antigo.
                await tx.userAuthToken.updateMany({
                    where: { user_id: resetToken.user_id, status: "A" },
                    data: { status: "I", updated_at: new Date() }
                });
            });

            return { reset: true };
        } catch (err) {
            return parseError(err);
        }
    }
};
