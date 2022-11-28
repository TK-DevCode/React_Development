import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData, // Remember that the ... is copying everything in enteredExpenseData and add one more element
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };    

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;