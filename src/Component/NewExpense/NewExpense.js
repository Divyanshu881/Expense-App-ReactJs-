// eslint-disable-next-line
import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    isEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClick={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
