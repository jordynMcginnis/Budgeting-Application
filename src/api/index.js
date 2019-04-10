const axios = require('axios');

const axiosParams = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

module.exports = {
  getBalances: () => {
    return axios.get('http://localhost:8085/yo', axiosParams)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
  },

};