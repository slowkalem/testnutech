const axios = require("axios");

async function post(url, data) {
  var req = await axios
    .post(url, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });

  return req;
}

async function put(url, data) {
  var req = await axios
    .put(url, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });

  return req;
}

async function deleteMethod(url, data) {
  var req = await axios
    .delete(url, {
      data: data,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });

  return req;
}

async function get(url, params) {
  var req = await axios
    .get(url, { params })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
  return req;
}

async function getDownload(url, params) {
  var req = await axios
    .get(url, { params, responseType: "blob" })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });

  return req;
}

async function postMultipart(url, formData) {
  var req = await axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
  return req;
}

async function putMultipart(url, formData) {
  var req = await axios
    .put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
  return req;
}

async function call(config) {
  var req = await axios(config)
    .then((res) => {
      // console.log(res)
      return res;
    })
    .catch((error) => {
      // console.log(error)
      return error.response;
    });
  return req;
}

module.exports = { call, get, post, put, deleteMethod, postMultipart, putMultipart, getDownload };
