import React from 'react';

function TopCategories(props) {
  const topExpenses = Object.entries(props.expenses.reduce((categoryKey,expense) => {
    if(categoryKey[expense.category]){
      categoryKey[expense.category] = categoryKey[expense.category] + expense.price;
    } else {
      categoryKey[expense.category] = expense.price;
    }
    return categoryKey;
  },{})).sort((a, b) => b[1] - a[1]).slice(0,3);

  return (
    <div className='top-categories'>
      <h3>Top Categories</h3>
      {topExpenses.map((expense, index)=>(
        <li key={index}>
          <span>{expense[0]}</span>
          <span>${expense[1]}</span>
        </li>
      ))}
    </div>
  );
}

export default TopCategories;