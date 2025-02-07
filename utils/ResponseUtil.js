const { GetMsg } = require("../utils/MessageUtil");

const Ok = (res, msg, data) => {
  createMsg(res, 200, 0, msg, data);
};

const BadRequest = (res, msg) => {
  createMsg(res, 400, 102, msg, undefined);
};

const Unauthorized = (res, msg) => {
  createMsg(res, 401, 108, msg, undefined);
};

const InternalServerErr = (res, msg) => {
  createMsg(res, 500, 500, msg, undefined, "Internal Server Error");
};

const NotFound = (res, msg) => {
  createMsg(res, 404, 404, msg, null);
};

const createMsg = (res, statusCode, status, message = "", data, error) => {
  if (!data) {
    data = null;
  } else {
    data = data.length == 0 ? undefined : data;
  }
  res.status(statusCode).send({
    status,
    message,
    data,
    error,
  });
};

module.exports = {
  Ok,
  BadRequest,
  Unauthorized,
  InternalServerErr,
  NotFound
};
