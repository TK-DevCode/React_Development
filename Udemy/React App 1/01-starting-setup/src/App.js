import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

//Array Off expense object(key value pair)
const Dummy_expenses = [
  {
    date: new Date(2022, 10, 17),
    title: "Car Insurance",
    amount: 458.96,
  },
  {
    date: new Date(2021, 10, 16),
    title: "Food",
    amount: 1858.96,
  },
  {
    date: new Date(2020, 10, 15),
    title: "Rent",
    amount: 590.96,
  },
  {
    date: new Date(2019, 10, 14),
    title: "Gym",
    amount: 128.96,
  },
];

function App() {

  const [expenses, setExpenses] = useState(Dummy_expenses);

  function addExpenseHandler(expense){ //the new expense get passed in from the onAddExpense function in NewExpense
    
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });// Here we use a special function. In stead of passing in the new array [expense, ...expenses] as an arugment
    // We pass in a fuction instead so that setExpense automatically recieve the latest state snapshot 
    // We get all our previous epenses and then return a new array where we add this new expense to the old list of expenses 
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses 
        expense_array={expenses}/>      
    </div>
  );
}

export default App;
