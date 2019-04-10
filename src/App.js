import React, { Component } from 'react';
import './App.css';
import Balance from './components/Balance';
import Actions from './components/Actions';
import SpendingInsights from './components/SpendingInsights';
import ExpenseChart from './components/ExpenseChart';
import TopCategories from './components/TopCategories';
import { useAlert } from 'react-alert';

class App extends Component {
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
