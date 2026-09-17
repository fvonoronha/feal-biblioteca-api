const jsonWebToken = require("jsonwebtoken");
const { getSlug } = require("./id.service");
const { env } = require("process");

const JWT_EXPIRES_IN = env.JWT_EXPIRES_IN || "7d";

const getJWT = (user) => {
    const secret = getSlug();
    const payload = {
        sub: user.id.toString(),
        lgn: user.login,
        sct: secret
    };
    const jwtToken = jsonWebToken.sign(payload, env.CRYPTOGRAPHY_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { secret, token: jwtToken };
};

const isJWTValid = (jwt) => {
    try {
        return !!jsonWebToken.verify(jwt, env.CRYPTOGRAPHY_SECRET);
    } catch {
        return false;
    }
};

const getHeader = (req, headerName) => {
    return req.headers[headerName] || req.body?.[headerName];
};

module.exports = {
    getJWT,
    getHeader,
    isJWTValid
};
