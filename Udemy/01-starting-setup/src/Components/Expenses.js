import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props){

    return (
        <div className="expenses">
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
        </div>
      );
}

export default Expenses;