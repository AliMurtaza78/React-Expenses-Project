import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./ExpensesList.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
      < li className="expenses-list">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterHandler={filterChangeHandler}
        />
        <ExpensesList items= {filteredExpenses} />
      </Card>
      </li>
  );
};

export default Expenses;
