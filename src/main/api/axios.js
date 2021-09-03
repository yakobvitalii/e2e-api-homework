const axios = require("axios");
const { API_URL } = require("../constant");

const api = axios.create({
    baseURL: API_URL,
    timeout: 20000,
    validateStatus: (status) => {
        return status >= 200 && status < 500;
    },
});

module.exports = {
    api,
}