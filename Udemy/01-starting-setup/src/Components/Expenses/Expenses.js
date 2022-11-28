import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterSelected, onSelectedFilter] = useState("2023");

  function selectedFilterHandler(yearSelected) {
    console.log(yearSelected);
    onSelectedFilter(yearSelected);
  }

  return (
    //Card act as a wrapper
    <Card className="expenses">
      <ExpensesFilter selected={filterSelected} onFilterSelect={selectedFilterHandler} />
      <ExpenseItem
        date={props.expense_array[0].date}
        title={props.expense_array[0].title}
        amount={props.expense_array[0].amount}
      />
      <ExpenseItem
        date={props.expense_array[1].date}
        title={props.expense_array[1].title}
        amount={props.expense_array[1].amount}
      />
      <ExpenseItem
        date={props.expense_array[2].date}
        title={props.expense_array[2].title}
        amount={props.expense_array[2].amount}
      />
      <ExpenseItem
        date={props.expense_array[3].date}
        title={props.expense_array[3].title}
        amount={props.expense_array[3].amount}
      />
    </Card>
  );
}

export default Expenses;
