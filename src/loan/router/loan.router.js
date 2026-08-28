const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { isAuthOrNot, isAuth } = require("../../auth/controller/auth.controller");
const { listLoans, returnLoan } = require("../controller/loan.controller");

method.post(`/loans`, init, isAuthOrNot, listLoans, end);

method.post(`/loan/${id("loanId")}/return`, init, isAuthOrNot, returnLoan, end);

module.exports = method;
