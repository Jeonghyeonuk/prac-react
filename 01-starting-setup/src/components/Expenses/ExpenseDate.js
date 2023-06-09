import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const { date } = props;
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__years">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
