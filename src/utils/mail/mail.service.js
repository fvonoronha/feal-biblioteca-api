const process = require("process");
const nodemailer = require("nodemailer");
const fs = require("fs/promises");
const path = require("path");

const { replaceVariables, cap } = require("../variables.service");

const {
    SMTP_SERVER_HOST,
    SMTP_SERVER_PORT,
    SMTP_SERVER_USERNAME,
    SMTP_SERVER_PASSWORD,
    SMTP_SERVER_SECURE,
    SMTP_SERVER_FROM_NAME,
    SMTP_SERVER_FROM_ADDRESS,

    WEB_URL
} = process.env;

if (!SMTP_SERVER_HOST) {
    throw new Error("SMTP_SERVER_HOST não configurado.");
}

if (!SMTP_SERVER_PORT) {
    throw new Error("SMTP_SERVER_PORT não configurado.");
}

if (!SMTP_SERVER_USERNAME) {
    throw new Error("SMTP_SERVER_USERNAME não configurado.");
}

if (!SMTP_SERVER_PASSWORD) {
    throw new Error("SMTP_SERVER_PASSWORD não configurado.");
}

const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: Number(SMTP_SERVER_PORT),

    // true normalmente para 465.
    // false normalmente para 587 (STARTTLS).
    secure: SMTP_SERVER_SECURE === "true",

    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD
    }
});

const from = `"${SMTP_SERVER_FROM_NAME || "FEAL - Biblioteca"}" <${SMTP_SERVER_FROM_ADDRESS}>`;

module.exports = {
    async sendUserWelcomeEmail(user) {
        const templatePath = path.join(__dirname, "templates", "userWelcome.html");
        const html = replaceVariables(await fs.readFile(templatePath, "utf8"), {
            NAME: cap(user.name.split(" ")[0]),
            LOGIN: user.login.toLowerCase(),
            URL: `https://${WEB_URL}`
        });
        return await module.exports.sendSimpleEmail(user.email, "Bem-vindo à Biblioteca da FEAL!", html);
    },

    async sendSimpleEmail(to, subject, body, attachments = [], options = {}) {
        if (!to) {
            throw new Error("Destinatário do e-mail não informado.");
        }

        if (!subject) {
            throw new Error("Assunto do e-mail não informado.");
        }

        if (!body) {
            throw new Error("Conteúdo do e-mail não informado.");
        }

        // const { text, replyTo, cc, bcc, headers, priority, ...additionalOptions } = options;

        const message = {
            from,
            to,
            subject,
            html: body,
            ...(attachments?.length ? { attachments } : {})
        };

        try {
            const result = await transporter.sendMail(message);

            return result;
        } catch (error) {
            return { error: error };
        }
    }
};
