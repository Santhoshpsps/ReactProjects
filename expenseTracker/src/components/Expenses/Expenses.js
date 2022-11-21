import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredyear, setfilteredyear] = useState("2020");

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredyear;
  });

  const filterhandler = (data) => {
    setfilteredyear(data);
    console.log(data);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filteredyear} onFilter={filterhandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
