const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { hasRole } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { requireAuth } = require("../../auth/controller/auth.controller");
const { listLoans, listMyLoans, returnLoan, renewLoan, createLoan } = require("../controller/loan.controller");

// Empréstimos expõem PII de outros usuários (nome/telefone) e permitem marcar itens como
// devolvidos - por isso exigem sessão válida com papel de ADMIN ou LIBRARIAN, nunca público.
const canManageLoans = hasRole("ADMIN", "LIBRARIAN");

method.post(`/loans`, init, requireAuth, canManageLoans, listLoans, end);

// Auto-serviço: qualquer usuário autenticado pode consultar o próprio histórico (a rota
// sempre força o filtro para o dono da sessão, ver controller).
method.post(`/loan/mine`, init, requireAuth, listMyLoans, end);

method.post(`/loan`, init, requireAuth, canManageLoans, createLoan, end);

method.post(`/loan/${id("loanId")}/return`, init, requireAuth, canManageLoans, returnLoan, end);

method.post(`/loan/${id("loanId")}/renew`, init, requireAuth, canManageLoans, renewLoan, end);

module.exports = method;
