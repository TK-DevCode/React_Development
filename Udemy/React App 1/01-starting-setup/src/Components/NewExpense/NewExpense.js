import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData, // Remember that the ... is copying everything in enteredExpenseData and add one more element
            id: Math.random().toString()
        };
        console.log(expenseData.id);
        //New Expense build up the expense based on the user input and add a id the gets passed below
        props.onAddExpense(expenseData); // The new created expense is now passed to the App,js throught the onAddExpense props
    };   

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
        </div>
        
}

export default NewExpense;