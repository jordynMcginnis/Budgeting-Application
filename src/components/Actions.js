import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { submitExpense, updateBudget } from '../api/index.js';
import { useAlert } from 'react-alert';

function Actions(props) {
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [budget, setBudget] = useState(null);
  const alert = useAlert();

  function correctCategory () {
    if(category !== null) {
      return true;
    } else {
      alert.show('Select a category');
      return false;
    }
  }
  function correctPrice () {
    if(isNaN(price) === false && price !== null) {
      return true;
    } else {
      alert.show('add expense cost');
      return false;
    }
  }
  function correctBudget () {
    if(isNaN(budget) === false && budget !== null) {
      return true;
    } else {
      alert.show('add a correct budget');
      return false;
    }
  }
  function resetPrice () {
    setPrice(null);
  }
  function resetBudget () {
    setBudget(null);
  }
  function addExpense() {
    if (correctCategory() && correctPrice()) {
      props.addExpense({category: category, price: price})
      resetPrice();
    }
  }
  function addBudget() {
    if(correctBudget()) {
      props.addBudget(budget)
      resetBudget();
    }
  }
  function addValue(func, value) {
    func(parseInt((value).slice(1)));
  }
  return (
    <div className='actions'>
      <h3>Add Expense</h3>
      <RadioGroup
        className='radio-group'
        children='radio-b'
        onChange={(e) => {setCategory(e)}}
        defaultValue='Rent'
      >
        <RadioButton pointColor='#38cbc6'value="Grocery">
          Grocery
        </RadioButton>
        <RadioButton pointColor='#38cbc6' value="Rent" >
          Rent
        </RadioButton>
        <RadioButton pointColor='#38cbc6' value="Utility Bills">
          Utility Bills
        </RadioButton>
        <RadioButton pointColor='#38cbc6' value="Eating Out">
          Eating Out
        </RadioButton>
        <RadioButton pointColor='#38cbc6' value="Clothing">
          Clothing
        </RadioButton>
        <RadioButton pointColor='#38cbc6' value="Social">
          Social
        </RadioButton>
      </RadioGroup>
      <NumberFormat
        prefix={'$'}
        value={price}
        onChange={({target}) => {addValue(setPrice, target.value)}}
      />
      <button onClick={addExpense}>Submit</button>
      <h3>Update Budget</h3>
      <NumberFormat
        prefix={'$'}
        value={budget}
        onChange={({target}) => {addValue(setBudget, target.value)}}
      />
      <button onClick={addBudget}>Submit</button>
      <button onClick={props.removeExpenses}>Delete All Expenses</button>
    </div>
  )
}