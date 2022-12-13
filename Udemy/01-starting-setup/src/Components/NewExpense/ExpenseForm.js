import React, { useState } from "react"; // useState is a React Hook
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // use Hooks can only be called in React components non normal JS
  // Hooks are used to re-evaluate the data when an onClick/onWhatEver Handler has been triggered to update the value and redraw it on the screen

  // With the useState you create a special kind of variable. useState gets passed the initial value as a argument
  // useState returns 2 things for us: 1. Gives us access to this special variable
  // 2. Returns a function that we can call to assign a new value to the variable
  // Summary: useState returns an Array = [value itself, updating function]

  // You can use destucturing to store both returned elements into seperate variables/constants

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [create, createButtonState] = useState(false);
  const [cancel, cancelButtonState] = useState(false);

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // Every time the onChange Event is triggered the current entered value is stored in enteredTitle,
    //through the state fuction
  };
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    //value returned by event.target.value will always be a string
  };
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  };
  function submitHandler(event) {
    event.preventDefault(); // By default a button placed inside a form will act as a submit button and reload the browser
    // By page will reload because of a request being sent to the sever to submit the form
    // But we don't want that, we want to control the submit with JavaScript

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // Construct a new date , this will pharse the date string into Date() to create a new Date object
    };
    //When the Add Expense button is pressed the submit Handler is triggered and the expense data gets build and passed to NewExpense
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    createButtonState(false);
  };

  function createState() {
    createButtonState(true);
    cancelButtonState(false);
  };
  function cancelState() {
    cancelButtonState(true);
    createButtonState(false);
  };

  if (create == true && cancel == false) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2018-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelState}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <div className="new-expense__action">
        <button type="button" onClick={createState}>
          Create New Expense
        </button>
      </div>
    </div>
  );
}

export default ExpenseForm;
