import ReactDOM from "react-dom/client"; // react-dom이라는 패키지에서 ReactDOM 객체를 받아옴.

import "./index.css";
import App from "./App";

/**
 * ReactDom이라는 객체의 createRoot메소드를 사용
 * 해당 메소드는 React를 사용하여 구축할 인터페이스의 메인 엔트리 포인트를 생성한다(= 페이지 어디에 React가 로딩되어야 하는지 정의한다.)
 * 여기서는 /public/index.html 파일의 <div id=root></div> 에 로딩된다.
 * 그다음 root 객체를 상수 또는 변수에 저장한뒤 root객체에서 render 메서드를 호출하여 React에게 선택된 div에서 무엇이 렌더링 되어야 하는지를 알려준다.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
