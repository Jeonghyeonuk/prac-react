import React from "react";
import "./ExpenseItem.css"; // CSS 파일을 import 하는방법

function ExpenseItem(props) {
  const { title, amount, date } = props;
  return (
    // class대신 className을 사용해야한다. Class는 자바스크립트 예약어이기 때문에
    <div className="expense-item">
      <div>{date.toISOString().slice(0, 10)}</div>
      {/* {} 를 이용해서 자바스크립트 코드를 작성 할 수 있다.
       Date는 객체기때문에 문자열로 변환이 필요하다. */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

/**
 * JSX문법을 사용하여 리턴할때는 꼭 최상위 html태그는 한개만 있어야한다.
 */
