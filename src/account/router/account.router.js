const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const rateLimit = require("express-rate-limit");

const { requireAuth } = require("../../auth/controller/auth.controller");
const {
    validateAccountCreationEmail,
    validateAccountCreationLogin,
    createAccount,
    updateProfile,
    changePassword
} = require("../controller/account.controller");

// Endpoints públicos e não autenticados: login/e-mail "válido?" são oráculos de enumeração de
// usuários e a criação de conta é o principal alvo de abuso automatizado, então levam um limite
// bem mais agressivo que o global do server.js.
const accountLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    standardHeaders: true,
    legacyHeaders: false
});

method.post(`/account/validate/email`, accountLimiter, init, validateAccountCreationEmail, end);

method.post(`/account/validate/login`, accountLimiter, init, validateAccountCreationLogin, end);

method.post(`/account`, accountLimiter, init, createAccount, end);

// Edição de perfil exige sessão válida - sem o limitador agressivo acima, que é pensado
// para os endpoints públicos e não-autenticados desse arquivo.
method.put(`/account/me`, init, requireAuth, updateProfile, end);

// Troca de senha também exige sessão válida, mas fica com o limitador mais agressivo por ser
// alvo natural de força bruta (tentativas de acertar a "senha atual").
method.put(`/account/password`, accountLimiter, init, requireAuth, changePassword, end);

module.exports = method;
