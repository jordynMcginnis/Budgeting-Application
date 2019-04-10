const axios = require('axios');

const axiosParams = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

module.exports = {
  getExpenses: () => {
    return axios.get('http://localhost:4000/api/show_posts', axiosParams)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },
  addExpense: (body) => {
    const data = {expense: body};
    return axios.post('http://localhost:4000/api/add_expense', data, axiosParams)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  deleteExpenses: () => {
    const data = {id: 7};
    return axios.delete('http://localhost:4000/api/delete_expenses',data,axiosParams)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },
};