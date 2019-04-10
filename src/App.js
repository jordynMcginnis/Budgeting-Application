import React, { Component } from 'react';
import './App.css';

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
