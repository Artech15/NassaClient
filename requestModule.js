const { default: axios } = require("axios");
const { request } = require("pandas/lib/flickr");

const axiosSettings = {
    defaultheader: [],
    // ...
}


module.exports = async function request(apiDefObj){
    const _axios = axios.defaults(axiosSettings)
    return _axios[apiDefObj.method](apiDefObj.path)
}


const Users_ApiDef = {
    getUser: {method: "GET", path: 'api/users/'},

}

request(Users_ApiDef.getUser)