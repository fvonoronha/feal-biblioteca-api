const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const loanService = require("../service/loan.service");

module.exports = {
    async listLoans(req, res, next) {
     
        const loan = await loanService.listLoans(req.body.filter || {}, req.body.pagination || {});

        if (loan.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.loan = { error: loan.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.loan = loan;
        return next();
    },

    async returnLoan(req, res, next) {
       
        const loan = await loanService.returnLoan(req.params.loanId);

     

        if (loan.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.loan = { error: loan.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.loan = loan;
        return next();
    }
};
