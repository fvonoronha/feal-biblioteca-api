const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const rateLimit = require("express-rate-limit");

const {
    login,
    checkSession,
    logout,
    requireAuth,
    requestPasswordReset,
    validateResetToken,
    resetPassword
} = require("../controller/auth.controller");

// Login é o principal alvo de força bruta da API: limite bem mais agressivo que o global.
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false
});

// Solicitar/validar/trocar senha também são alvos de abuso (spam de e-mails, força bruta de
// token) - mesmo nível de restrição do login.
const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false
});

method.post(`/login`, loginLimiter, init, login, end);

method.get(`/is-auth`, init, checkSession, end);

method.delete(`/logout`, init, requireAuth, logout, end);

method.post(`/password-reset/request`, passwordResetLimiter, init, requestPasswordReset, end);

method.post(`/password-reset/validate`, passwordResetLimiter, init, validateResetToken, end);

method.post(`/password-reset/reset`, passwordResetLimiter, init, resetPassword, end);

module.exports = method;
