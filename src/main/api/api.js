const { api } = require("./axios")
const { info } = require("../../../log.config");

const get = async (url, param) => {
   info(`GET /${url}?${param}`)
   return await api.get(`${url}?${param}`);
};

module.exports = {
    get
}