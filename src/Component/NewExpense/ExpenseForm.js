// eslint-disable-next-line
import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [EntredTitle, setEnteredTitle] = useState("");
  const [EntredAmount, setEnteredAmount] = useState("");
  const [EntredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput]=useState({
  //     entredTitle:'',
  //     entredAmount:'',
  //     entredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,
    //     entredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,
    //     entredAmount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,
    //     entredDate: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EntredTitle,
      amount: +EntredAmount,
      date: new Date(EntredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EntredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={EntredAmount}
            min="1"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={EntredDate}
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
       <button type="button" onClick={props.onClick} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
