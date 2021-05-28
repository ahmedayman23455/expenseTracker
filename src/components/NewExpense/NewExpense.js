import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (EnteredExpensesData) => {
    const ExpenseData = {
      ...EnteredExpensesData,
      id: (Math.floor(Math.random() * 100) + 1).toString(),
    };
    props.onAddExpense(ExpenseData);
    setIsEditing(false);
  };

  const enableEditingHandler = () => {
    setIsEditing(true);
  };

  const disableEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          hideEditing={disableEditingHandler}
        />
      )}
      {!isEditing && (
        <button onClick={enableEditingHandler}> Add New Expense </button>
      )}
    </div>
  );
};

export default NewExpense;
