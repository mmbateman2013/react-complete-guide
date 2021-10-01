import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2020");
  const expenses = props.expenses;
  const receiveSelectYear = (year) => {
    setSelectYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={receiveSelectYear}
          selectedYear={selectYear}
        />
        {expenses.map((e) => (
          <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
