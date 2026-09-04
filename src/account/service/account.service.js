const { getSlug } = require("../../utils/id.service");
const { encrypt } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");
const { sendUserWelcomeEmail } = require("../../utils/mail/mail.service");

module.exports = {
    async createAccount(user) {
        try {
            const existingUser = await db.User.findUnique({
                where: {
                    login: user.login
                },
                select: {
                    id: true,
                    login: true,
                    status: true
                }
            });
            if (existingUser) {
                if (existingUser.status === "A") {
                    return {
                        error: [
                            {
                                field: "login",
                                message: "Este login já está em uso."
                            }
                        ]
                    };
                }

                if (existingUser.status === "P") {
                    const updatedUser = await db.User.update({
                        where: {
                            id: existingUser.id
                        },
                        data: {
                            name: user.name,
                            display_name: user.display_name || user.name,
                            sex: user.sex,
                            email: user.email,
                            cpf: user.cpf,
                            phone: user.phone,
                            password: await encrypt(user.password),
                            status: "A"
                        },
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
                            role: true
                        }
                    });

                    return updatedUser;
                }

                return {
                    error: [
                        {
                            field: "login",
                            message: "Este login não pode ser utilizado."
                        }
                    ]
                };
            }

            const newUser = await db.User.create({
                data: {
                    name: user.name,
                    display_name: user.display_name || user.name,
                    sex: user.sex,
                    login: user.login,
                    email: user.email,
                    cpf: user.cpf,
                    phone: user.phone,
                    password: await encrypt(user.password),

                    slug: getSlug(),
                    role: "MEMBER",
                    status: "A"
                },
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
                    role: true
                }
            });

            // Enviar email de boas-vindas
            await sendUserWelcomeEmail(newUser);

            return newUser;
        } catch (err) {
            return parseError(err);
        }
    },

    async validateAccountCreationEmail(email) {
        try {
            const newUser = await db.User.findFirst({
                where: { email },
                select: {
                    id: true
                }
            });

            return !newUser;
        } catch (err) {
            return parseError(err);
        }
    },

    async validateAccountCreationLogin(login) {
        try {
            const newUser = await db.User.findFirst({
                where: { login },
                select: {
                    id: true
                }
            });

            return !newUser;
        } catch (err) {
            return parseError(err);
        }
    }
};
