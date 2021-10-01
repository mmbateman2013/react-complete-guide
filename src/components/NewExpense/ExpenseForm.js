import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="new-expense-title">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            name="new-expense-title"
            id="new-expense-title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="new-expense-amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            name="new-expense-amount"
            id="new-expense-amount"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="new-expense-date">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            name="new-expense-date"
            id="new-expense-date"
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
