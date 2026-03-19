const { getSlug } = require("../../utils/id.service");
const { encrypt } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

module.exports = {
    async createAccount(user) {
        try {
            const newUser = await db.User.create({
                data: {
                    ...user,
                    display_name: user.display_name || user.name,
                    slug: getSlug(),
                    password: await encrypt(user.password),
                    role: "MEMBER" // default role for new accounts
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
