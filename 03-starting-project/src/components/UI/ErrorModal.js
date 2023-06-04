import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onErrorClose}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onErrorClose={props.onErrorClose} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorClose={props.onErrorClose}
        />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
