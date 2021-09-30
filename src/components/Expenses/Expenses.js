import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
};

export default Expenses;
