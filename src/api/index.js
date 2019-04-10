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
  deleteExpenses: (id) => {
    return axios.delete(`http://localhost:4000/api/delete_expenses/${id}`,axiosParams)
      .then(function (response) {
        return id;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },
  getBudget: () => {
    return axios.get('http://localhost:4000/api/show_budget', axiosParams)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  },
  updateBudget: (amount) => {
    const data = {budget: {budget: amount}};
    return axios.put('http://localhost:4000/api/update_budget/1', data, axiosParams)
      .then(function (response) {
        console.log(response)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
        return error;
      })
  }
};