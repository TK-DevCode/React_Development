
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // use Hooks can only be called in React components non normal JS
  // Hooks are used to re-evaluate the data when an onClick/onWhatEver Handler has been triggered to update the value and redraw it on the screen 

  // With the useState you create a special kind of variable. useState gets passed the initial value as a argument
  // useState returns 2 things for us: 1. Gives us access to this special variable
  // 2. Returns a function that we can call to assign a new value to the variable
  // Summary: useState returns an Array = [value itself, updating function]

  // You can use destucturing to store both returned elements into seperate variables/constants
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>      
    </Card>
  );

}

export default ExpenseItem;
