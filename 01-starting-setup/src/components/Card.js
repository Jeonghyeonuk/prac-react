import React from "react";
import "./Card.css";

function Card(props) {
  const { children } = props;
  /*
   *childern prop은 React의 예약어로 언제나 사용자 지정 컴포넌트에 있는 열고 닫는 태그 사이에 있는 컨첸츠이다
   *이경우 ExpenseItem 파일에서 <Card></Card> 사이에 있는 모든 컨텐츠들이 childern props로 넘어오게 되어 래퍼 컴포넌트를 만들수 있게된다
   */

  const classes = `card ${props.className}`;
  /**
   * 일반 html 태그에서 className 을 사용하면 class가 바로 적용되지만
   * 커스텀 컴포넌트에서는 className또한 props로 인식이 되기때문에 위처럼 class이름을 생성해서 넣어준다.
   */
  return <div className={classes}>{children}</div>;
}

export default Card;
