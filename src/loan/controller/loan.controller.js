const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createLoanSchema } = require("../../utils/schema/Loan");
const loanService = require("../service/loan.service");

module.exports = {
    async listLoans(req, res, next) {
        const loan = await loanService.listLoans(req.body.filter || {}, req.body.pagination || {});

        if (loan.error) {
            return respondError(req, res, "loan", loan);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.loan = loan;
        return next();
    },

    // GET-like listagem "meus empréstimos", auto-serviço do próprio usuário logado (qualquer
    // papel, não só ADMIN/LIBRARIAN). O user_id é sempre forçado para o dono da sessão depois
    // do spread do filtro do cliente, então não há como outro usuário consultar por essa rota.
    async listMyLoans(req, res, next) {
        const filter = { ...(req.body.filter || {}), user_id: req.response.params.user.id };
        const loan = await loanService.listLoans(filter, req.body.pagination || {});

        if (loan.error) {
            return respondError(req, res, "loan", loan);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.loan = loan;
        return next();
    },

    async renewLoan(req, res, next) {
        const loan = await loanService.renewLoan(req.params.loanId, req);

        if (loan.error) {
            return respondError(req, res, "loan", loan);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.loan = loan;
        return next();
    },

    async returnLoan(req, res, next) {
        const loan = await loanService.returnLoan(req.params.loanId, req);

        if (loan.error) {
            return respondError(req, res, "loan", loan);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.loan = loan;
        return next();
    },

    async createLoan(req, res, next) {
        const validatedLoan = validateSchema(createLoanSchema, req.body);

        if (!validatedLoan.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.loan = { error: validatedLoan.err };
            return end(req, res);
        }

        const loan = await loanService.createLoan(validatedLoan.data, req);

        if (loan.error) {
            return respondError(req, res, "loan", loan);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.loan = loan;
        return next();
    }
};
