import React, { useEffect } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { useAlert } from 'react-alert';
import { getBalance } from '../api/index.js';

function Balance(props) {
  const budgetSpent = props.expenses.reduce((amount, expense) => {
   return amount += expense.price;
  },0);

  const alert = useAlert();
  const percentageSpent = (budgetSpent/(props.budget + budgetSpent))*100;
  const percentageLeft = 100 - percentageSpent;

  const barStyle = {
    margin: '20px',
    width: '80%',
    height: '20px',
    background: `linear-gradient(to right,  #63c5c4 ${percentageLeft}%,#f6f6f6 ${percentageSpent}%)`
  }

  useEffect(() => {
    alert.show('Update your Budget!');
    alert.show('Add an Expense');
  },[]);

  return (
    <div className='balance'>
      <h1>Budget ${props.budget}</h1>
      <h3>Current Balance <FaDollarSign className='balance-icon'/> {props.budget - budgetSpent}</h3>
      <h3>Balance Spent <FaDollarSign className='balance-icon'/> {budgetSpent}</h3>
      <div style={barStyle}> </div>
    </div>
  );
}

export default Balance;