import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal-backdrop"]}></div>
      <div className={classes["modal-content"]}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button onClick={props.onClick}>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
