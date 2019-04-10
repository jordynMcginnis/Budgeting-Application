import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SimpleBarChart(props) {
  const categoryKey = Object.entries(props.expenses.reduce((objKey, obj) => {
  if(objKey[obj.category]){
    objKey[obj.category] += obj.price;
  } else {
    objKey[obj.category] = obj.price;
  }
    return objKey
  }, {})).map((item)=>{
    return {category: item[0], price: item[1]}
  });

  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={categoryKey}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="category"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="price" fill="#63c6c4"/>
      </BarChart>
    </ResponsiveContainer>
  )
}

function ExpenseChart(props) {
  return (
    <div className='expenseChart'>
      <h3> ExpenseChart </h3>
      <SimpleBarChart expenses={props.expenses}/>
    </div>
  );
}

export default ExpenseChart;