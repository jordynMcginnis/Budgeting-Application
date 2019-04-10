import React from 'react';
import { FaDollarSign, FaCreditCard } from "react-icons/fa";

function SpendingInsights(props) {
  return (
    <div className='spending-insights'>
      <h3>Spending Insights</h3>
      <ul>
        {props.expenses.map((expense, index) => (
          <li key={index}>
            <span><FaCreditCard className='fa-icon'/>{expense.category}</span>
            <span><FaDollarSign className='fa-icon'/>{expense.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpendingInsights;