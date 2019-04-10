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
  return (

  )
}