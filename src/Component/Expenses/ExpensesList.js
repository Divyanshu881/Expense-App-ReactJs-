// eslint-disable-next-line
import react from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.yearExpenseFilter.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.yearExpenseFilter.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
