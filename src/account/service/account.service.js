const { getSlug } = require("../../utils/id.service");
const { encrypt, compare } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");
const { sendUserWelcomeEmail } = require("../../utils/mail/mail.service");

// O login de auto-cadastro é sempre o CPF (a tela de registro só aceita CPF ali) - guardamos
// esse mesmo valor em "document" também, para que a busca de usuários por CPF (ex.: na tela de
// novo empréstimo) funcione tanto para quem foi pré-cadastrado pelo bibliotecário quanto para
// quem se cadastrou por conta própria. Antes disso só o fluxo de pré-cadastro preenchia
// "document", deixando a busca por CPF silenciosamente sem resultado para o resto dos usuários.
function documentFromLogin(login) {
    return /^\d{11}$/.test(login) ? login : null;
}

const USER_SELECT_FIELDS = {
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
};

module.exports = {
    async createAccount(user) {
        try {
            const existingUser = await db.user.findUnique({
                where: {
                    login: user.login
                },
                select: {
                    id: true,
                    login: true,
                    status: true,
                    document: true
                }
            });

            if (existingUser) {
                if (existingUser.status === "A") {
                    return {
                        httpStatus: "CONFLICT",
                        error: [{ field: "login", message: "Este login já está em uso." }]
                    };
                }

                if (existingUser.status === "P") {
                    const updatedUser = await db.user.update({
                        where: {
                            id: existingUser.id
                        },
                        data: {
                            name: user.name,
                            display_name: user.display_name || user.name,
                            email: user.email,
                            phone: user.phone,
                            password: await encrypt(user.password),
                            status: "A",
                            document: existingUser.document || documentFromLogin(user.login)
                        },
                        select: USER_SELECT_FIELDS
                    });

                    return updatedUser;
                }

                return {
                    httpStatus: "BAD_REQUEST",
                    error: [{ field: "login", message: "Este login não pode ser utilizado." }]
                };
            }

            const newUser = await db.user.create({
                data: {
                    name: user.name,
                    display_name: user.display_name || user.name,
                    login: user.login,
                    email: user.email,
                    phone: user.phone,
                    password: await encrypt(user.password),
                    document: documentFromLogin(user.login),

                    slug: getSlug(),
                    role: "MEMBER",
                    status: "A"
                },
                select: USER_SELECT_FIELDS
            });

            // Falha ao enviar o e-mail de boas-vindas não deve impedir a criação da conta -
            // só é logada, para não perder de vista se o SMTP começar a falhar.
            const emailResult = await sendUserWelcomeEmail(newUser);
            if (emailResult?.error) {
                console.error("[account] Falha ao enviar e-mail de boas-vindas:", emailResult.error);
            }

            return newUser;
        } catch (err) {
            return parseError(err);
        }
    },

    // Retorna o booleano `true`/`false` (disponível ou não) no caminho normal, ou
    // `{error: [...]}` (via parseError) se uma exceção real acontecer - nunca confunde
    // as duas coisas, ao contrário do bug original em que "false" e "erro" levavam à mesma resposta.
    async isEmailAvailable(email) {
        try {
            const existingUser = await db.user.findFirst({
                where: { email },
                select: { id: true }
            });

            return !existingUser;
        } catch (err) {
            return parseError(err);
        }
    },

    async isLoginAvailable(login) {
        try {
            const existingUser = await db.user.findFirst({
                where: { login },
                select: { id: true }
            });

            return !existingUser;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateProfile(userId, data) {
        try {
            const existingEmail = await db.user.findFirst({
                where: { email: data.email, id: { not: userId } },
                select: { id: true }
            });

            if (existingEmail) {
                return {
                    httpStatus: "CONFLICT",
                    error: [{ field: "email", message: "Este e-mail já está em uso." }]
                };
            }

            const updatedUser = await db.user.update({
                where: { id: userId },
                data: {
                    name: data.name,
                    display_name: data.display_name || data.name,
                    email: data.email,
                    phone: data.phone,
                    sex: data.sex
                },
                select: USER_SELECT_FIELDS
            });

            return updatedUser;
        } catch (err) {
            return parseError(err);
        }
    },

    // Exige a senha ATUAL correta antes de trocar - diferente do fluxo de "esqueci minha
    // senha" (auth.service.js#resetPassword), que dispensa isso por depender só da posse do
    // token enviado por e-mail.
    async changePassword(userId, currentPassword, newPassword) {
        try {
            const user = await db.user.findFirst({ where: { id: userId }, select: { id: true, password: true } });

            if (!user) {
                return { httpStatus: "NOT_FOUND", error: [{ message: "Usuário não encontrado." }] };
            }

            const isCurrentPasswordValid = await compare(currentPassword, user.password);
            if (!isCurrentPasswordValid) {
                return {
                    httpStatus: "BAD_REQUEST",
                    error: [{ field: "current_password", message: "A senha atual informada está incorreta." }]
                };
            }

            const encryptedPassword = await encrypt(newPassword);
            await db.user.update({ where: { id: userId }, data: { password: encryptedPassword } });

            return { updated: true };
        } catch (err) {
            return parseError(err);
        }
    }
};
