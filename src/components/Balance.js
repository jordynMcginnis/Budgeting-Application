import React, { useEffect } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { useAlert } from 'react-alert';
import { getBalance } from '../api/index.js';

function Balance(props) {

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