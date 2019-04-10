import React, { useState, useEffect } from 'react';
import Balance from './components/Balance';
import Actions from './components/Actions';
import SpendingInsights from './components/SpendingInsights';
import ExpenseChart from './components/ExpenseChart';
import TopCategories from './components/TopCategories';
import { useAlert } from 'react-alert';
import { getExpenses, addExpense, deleteExpenses, getBudget, updateBudget } from './api/index.js';

function App () {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    fetchExpenses();
    fetchBudget();
  },[])

  function fetchExpenses() {
    getExpenses()
    .then((expenses) => {
      setExpenses(expenses.data);
    })
  }
  function fetchBudget() {
    getBudget()
    .then((budget) => {
      setBudget(budget.data[0].budget);
    })
  }
  function submitExpense(expense) {
    addExpense(expense)
    .then((expenses) => {
      fetchExpenses();
      alert.show('Expense added')
    })
  }
  function removeExpenses() {
    const lastExpense = expenses[expenses.length - 1].id
    for(var i = 0; i < expenses.length; i++){
      deleteExpenses(expenses[i].id)
      .then((deletedId) => {
        if(deletedId === lastExpense){
          console.log(true);
          fetchExpenses();
        }
      })
    }
  }
  function submitBudget(budget) {
    updateBudget(budget)
    .then(() => {
      fetchBudget();
    })
  }

  return (
    <div className="App">
      <SpendingInsights expenses={expenses}/>
      <Balance
        expenses={expenses}
        budget={budget}
      />
      <Actions
        addExpense={submitExpense}
        expenses={expenses}
        addBudget={submitBudget}
        removeExpenses={removeExpenses}
      />
      <ExpenseChart expenses={expenses}/>
      <TopCategories expenses={expenses}/>
    </div>
  );
}

export default App;
