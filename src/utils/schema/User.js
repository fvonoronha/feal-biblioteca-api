const { z } = require("zod");

// Mesmo algoritmo usado no front (src/utils/validation/common) - repetido aqui porque o
// backend nunca deve confiar apenas na validação do cliente.
function isValidCPF(cpf) {
    if (!/^\d{11}$/.test(cpf)) return false;

    // Elimina CPFs com todos os dígitos iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += Number(cpf[i]) * (10 - i);
    let remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;
    if (remainder !== Number(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += Number(cpf[i]) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;

    return remainder === Number(cpf[10]);
}

// Usado pelo admin/bibliotecário para pré-cadastrar um usuário (ex.: no fluxo de criação de
// empréstimo) informando só o essencial - o próprio usuário completa o cadastro depois via
// /account, usando o CPF como login.
const preRegisterUserSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200),
    phone: z
        .string()
        .regex(/^\d{10,11}$/, "O telefone informado não é válido"),
    document: z
        .string()
        .regex(/^\d{11}$/, "O CPF deve conter 11 dígitos")
        .refine(isValidCPF, "O CPF informado não é válido")
});

const createUserSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200),
    display_name: z.string().max(200).optional(),
    phone: z
        .string()
        .regex(/^\d{10,11}$/, "O telefone informado não é válido"),
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres").max(100),
    email: z.string().min(1, "Email é obrigatório").email("Email inválido").max(200),
    password: z.string().min(8, "Senha deve ter ao menos 8 caracteres").max(200)
});

const createUserEmailSchema = z.object({
    email: z.string().min(1, "Email é obrigatório").email("Email inválido").max(200)
});

const createUserLoginSchema = z.object({
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres").max(100)
});

// Edição de perfil pelo próprio usuário - CPF (login), senha, role e status ficam de fora
// de propósito: nenhum deles é um "dado pessoal básico" editável por esse fluxo.
const updateProfileSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200),
    display_name: z.string().max(200).optional(),
    email: z.string().min(1, "Email é obrigatório").email("Email inválido").max(200),
    phone: z
        .string()
        .regex(/^\d{10,11}$/, "O telefone informado não é válido"),
    sex: z.enum(["M", "F", "N"]).optional()
});

// Trocas de papel/status são ações administrativas sensíveis (conceder acesso de
// ADMIN/LIBRARIAN, ou desativar a conta de alguém) - schemas separados e minúsculos de
// propósito, cada endpoint só aceita exatamente o campo que muda.
const updateUserRoleSchema = z.object({
    role: z.enum(["ADMIN", "LIBRARIAN", "MEMBER"])
});

const updateUserStatusSchema = z.object({
    status: z.enum(["A", "I"])
});

// Edição pelo ADMIN/bibliotecário dos dados de contato de OUTRO usuário (ex.: a pessoa avisou
// que trocou de telefone/e-mail) - mesmos campos de updateProfileSchema, mas todos opcionais
// (o operador pode querer corrigir só um campo) e sem "sex", que é um dado pessoal que só o
// próprio usuário deveria editar.
const updateUserInfoSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200).optional(),
    display_name: z.string().max(200).optional(),
    email: z.string().email("Email inválido").max(200).optional().or(z.literal("")),
    phone: z
        .string()
        .regex(/^\d{10,11}$/, "O telefone informado não é válido")
        .optional()
});

// Troca de senha pelo próprio usuário autenticado - exige a senha atual (ver
// accountService#changePassword) pra não deixar alguém com a sessão aberta numa máquina
// compartilhada trocar a senha sem confirmar que é realmente o dono da conta.
const changePasswordSchema = z.object({
    current_password: z.string().min(1, "A senha atual é obrigatória."),
    new_password: z.string().min(8, "A nova senha deve ter ao menos 8 caracteres.").max(200)
});

module.exports = {
    createUserSchema,
    createUserEmailSchema,
    createUserLoginSchema,
    preRegisterUserSchema,
    updateProfileSchema,
    updateUserRoleSchema,
    updateUserStatusSchema,
    updateUserInfoSchema,
    changePasswordSchema
};
