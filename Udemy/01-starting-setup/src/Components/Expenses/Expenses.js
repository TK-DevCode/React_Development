import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterSelected, onSelectedFilter] = useState(2023);

  function selectedFilterHandler(yearSelected) {
    console.log(yearSelected);
    onSelectedFilter(yearSelected);    
  }

  const filteredExpenses = props.expense_array.filter(
    (expenseItem) => expenseItem.date.getFullYear() == filterSelected
  ); //This is appling the filter to the expenses by comparing the date selected with the date of each expense

  return (
    //Card act as a wrapper
    <Card className="expenses">
      <ExpensesFilter
        selected={filterSelected}
        onFilterSelect={selectedFilterHandler}
      />
      <ExpensesList expenseItem={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
