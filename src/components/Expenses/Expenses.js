import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
