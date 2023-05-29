import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem"; // 사용할 컴포넌트를 가져온다.
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const { item } = props;
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onChangeHandler}
        />
        <ExpenseItem
          title={item[0].title}
          amount={item[0].amount}
          date={item[0].date}
        />
        <ExpenseItem
          title={item[1].title}
          amount={item[1].amount}
          date={item[1].date}
        />
        <ExpenseItem
          title={item[2].title}
          amount={item[2].amount}
          date={item[2].date}
        />
        <ExpenseItem
          title={item[3].title}
          amount={item[3].amount}
          date={item[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
