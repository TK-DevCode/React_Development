import Expenses from "./Components/Expenses/Expenses";

function App() {
  //Array Off expense object(key value pair)
  const expenses = [
    {
      date: new Date(2022, 10, 17),
      title: "Car Insurance",
      amount: 458.96,
    },
    {
      date: new Date(2022, 10, 16),
      title: "Food",
      amount: 1858.96,
    },
    {
      date: new Date(2022, 10, 15),
      title: "Rent",
      amount: 590.96,
    },
    {
      date: new Date(2022, 10, 14),
      title: "Gym",
      amount: 128.96,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        expense_array={expenses}/>      
    </div>
  );
}

export default App;
