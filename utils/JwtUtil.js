const jwt = require("jsonwebtoken");
const { Unauthorized } = require("./ResponseUtil");
const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const verifyJwt = (req, token) => {
  try {
    let decoded = jwt.verify(token, secret);

    // set userId into request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      first_name: decoded.first_name,
      last_name: decoded.last_name
    };
    return true;
  } catch (err) {
    return false;
  }
};

const createJwtToken = (data) => {
  return jwt.sign(data, secret, { expiresIn: expired });
};

const getToken = (bearer) => {
  return bearer.slice(7, bearer.length);
};

const JwtFilter = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = await getToken(req.headers.authorization);

    if (verifyJwt(req, token)) {
      next();
    } else {
      Unauthorized(res, "Token tidak valid atau kadaluwarsa");
    }
  } else {
    Unauthorized(res, "Token tidak ada");
  }
};

module.exports = { verifyJwt, createJwtToken, JwtFilter };
