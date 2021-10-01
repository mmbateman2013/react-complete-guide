import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2020");

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
        {props.expenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
