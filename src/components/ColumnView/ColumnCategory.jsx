import { useState } from "react";
import NewTask from "../NewTask/NewTask";
import classes from "./ColumnCategory.module.css";
const ColumnCategory = (props) => {
  const [showNewTask, setShowNewTask] = useState(false);
  const addNewTaskHandler = () => {
    setShowNewTask(true);
  };
  const closeNewTask = () => {
    setShowNewTask(false);
  };
  return (
    <div className={classes["column-category"]}>
      {showNewTask && <NewTask onCloseNewTask={closeNewTask} />}
      <div
        className={classes["column-category_header"]}
        style={{ borderTop: `3px solid ${props.borderColor}` }}
      >
        <p>{props.title}</p>
        {props.title === "Todo" && (
          <button onClick={addNewTaskHandler}>+</button>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  );
};
export default ColumnCategory;
