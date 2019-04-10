function ExpenseChart(props) {
  return (
    <div className='expenseChart'>
      <h3> ExpenseChart </h3>
      <SimpleBarChart expenses={props.expenses}/>
    </div>
  );
}

export default ExpenseChart;