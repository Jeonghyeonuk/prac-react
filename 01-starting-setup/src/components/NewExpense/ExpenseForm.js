import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /**
   * State를 여러개로 관리하는법
   */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  /**
   * State를 한개로 관리하는법
   */
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // 이것처럼 값을 업데이트 해도 되지만 그전 state 상태에 의존해서 값을 update 할 경우에는 콜백함수를 사용한다.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    /**
     * 자식의 데이터를 부모로 넘기기
     * 1. 부모 컴포넌트에서 props로 데이터가 아닌 함수를 전달하고
     * 2. 자식에서 해당 함수를 실행 시키면서 파라미터로 데이터를 넘긴다.
     */
    props.onSaveExpenseData(expenseData);

    setEnteredTitle(""); // input의 value값에 양방향 바인딩
    setEnteredDate(""); // input의 value값에 양방향 바인딩
    setEnteredAmount(""); // input의 value값에 양방향 바인딩
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
