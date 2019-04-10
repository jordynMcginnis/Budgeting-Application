import React, { useState, useEffect } from 'react';
import './App.css';
import Balance from './components/Balance';
import Actions from './components/Actions';
import SpendingInsights from './components/SpendingInsights';
import ExpenseChart from './components/ExpenseChart';
import TopCategories from './components/TopCategories';
import { useAlert } from 'react-alert';
import { getExpenses, addExpense, deleteExpenses } from './api/index.js';

class App extends Component {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    fetchExpenses()
  },[])
  function fetchExpenses() {
    getExpenses()
    .then((expenses) => {
      setExpenses(expenses.data);
    })
  }
  function submitExpense(expense) {
    addExpense(expense)
    .then((expenses) => {
      fetchExpenses();
      alert.show('Expense added')
    })
  }
  render() {
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
          addBudget={budget => {setBudget(budget)}}
          removeExpenses={removeExpenses}
        />
        <ExpenseChart expenses={expenses}/>
        <TopCategories expenses={expenses}/>
      </div>
    );
  }
}

export default App;
