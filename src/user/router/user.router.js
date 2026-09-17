const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { hasRole, isAdmin } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { requireAuth } = require("../../auth/controller/auth.controller");
const {
    searchUsers,
    preRegisterUser,
    listUsersAdmin,
    updateUserRole,
    updateUserStatus,
    updateUserInfo
} = require("../controller/user.controller");

// Busca de usuários expõe PII (nome/telefone/CPF) e o pré-cadastro cria contas em nome de
// terceiros - por isso, assim como em loan.router.js, exige sessão de ADMIN ou LIBRARIAN.
const canManageUsers = hasRole("ADMIN", "LIBRARIAN");

method.post(`/users/search`, init, requireAuth, canManageUsers, searchUsers, end);

method.post(`/users/admin`, init, requireAuth, canManageUsers, listUsersAdmin, end);

method.post(`/users/pre-register`, init, requireAuth, canManageUsers, preRegisterUser, end);

// Conceder papel ADMIN/LIBRARIAN ou desativar uma conta são ações mais sensíveis que o resto
// da gestão de usuários - restritas a ADMIN, diferente do `canManageUsers` usado acima.
method.put(`/user/${id("userId")}/role`, init, requireAuth, isAdmin, updateUserRole, end);
method.put(`/user/${id("userId")}/status`, init, requireAuth, isAdmin, updateUserStatus, end);

// Atualizar dados de contato de outro usuário é bem menos sensível que trocar papel/status -
// mesmo nível de acesso do resto da gestão de usuários (ADMIN ou LIBRARIAN).
method.put(`/user/${id("userId")}/info`, init, requireAuth, canManageUsers, updateUserInfo, end);

module.exports = method;
