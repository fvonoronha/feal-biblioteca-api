const method = require("express").Router();
const { init, end } = require("../../utils/request.service");

const {
    validateAccountCreationEmail,
    validateAccountCreationLogin,
    createAccount
} = require("../controller/account.controller");

method.post(`/account/validate/email`, init, validateAccountCreationEmail, end);

method.post(`/account/validate/login`, init, validateAccountCreationLogin, end);

method.post(`/account`, init, createAccount, end);

module.exports = method;
