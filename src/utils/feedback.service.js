const httpStatusService = require("./httpStatus.service");

const FEEDBACK = {
    OK: {
        http: httpStatusService.OK
    },
    VALIDATED: {
        http: httpStatusService.OK
    },
    CREATED: {
        http: httpStatusService.CREATED
    },
    READ: {
        http: httpStatusService.OK
    },
    LISTED: {
        http: httpStatusService.OK
    },
    BAD_REQUEST: {
        http: httpStatusService.BAD_REQUEST
    },
    UNAUTHORIZED: {
        http: httpStatusService.UNAUTHORIZED
    },
    FORBIDDEN: {
        http: httpStatusService.FORBIDDEN
    },
    NOT_FOUND: {
        http: httpStatusService.NOT_FOUND
    },
    CONFLICT: {
        http: httpStatusService.CONFLICT
    },
    TOO_MANY_REQUESTS: {
        http: httpStatusService.TOO_MANY_REQUESTS
    },
    ERROR: {
        http: httpStatusService.ERROR
    }
};

module.exports = {
    getFeedbacks() {
        return FEEDBACK;
    }
};
