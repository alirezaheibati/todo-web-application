import React from "react";
import classes from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes["input-el_actions"]}>
      <div>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        ref={ref}
      />
    </div>
  );
});
export default Input;
