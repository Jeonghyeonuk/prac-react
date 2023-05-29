import React from "react";
import "./ExpenseItem.css"; // CSS 파일을 import 하는방법
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    // class대신 className을 사용해야한다. Class는 자바스크립트 예약어이기 때문에
    <Card className="expense-item">
      {/* {} 를 이용해서 자바스크립트 코드를 작성 할 수 있다.
       Date는 객체기때문에 문자열로 변환이 필요하다. */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

/**
 * JSX문법을 사용하여 리턴할때는 꼭 최상위 html태그는 한개만 있어야한다.
 */
