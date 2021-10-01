import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("ALL");
  const receiveSelectYear = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((e) => {
    return (
      filterYear === "ALL" || e.date.getFullYear().toString() === filterYear
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={receiveSelectYear}
          selectedYear={filterYear}
        />
        {filteredExpenses.map((e) => (
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
