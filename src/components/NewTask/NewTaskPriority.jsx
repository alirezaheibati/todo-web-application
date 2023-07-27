import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTaskPriority.module.css";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
const NewTaskPriority = (props) => {
  const priorityHandler = (e) => {
    props.onSelectPriority(
      e.currentTarget.getAttribute("data-color"),
      e.currentTarget.getAttribute("data-priority")
    );
  };
  return (
    <div className={classes["task-priority_container"]}>
      <ul>
        <li data-color="red" data-priority="Urgent" onClick={priorityHandler}>
          <FontAwesomeIcon icon={faFlag} style={{ color: "red" }} />
          <small>Urgent</small>
        </li>
        <li data-color="orange" data-priority="High" onClick={priorityHandler}>
          <FontAwesomeIcon icon={faFlag} style={{ color: "orange" }} />
          <small>High</small>
        </li>
        <li
          data-color="#F0DE36"
          data-priority="Medium"
          onClick={priorityHandler}
        >
          <FontAwesomeIcon icon={faFlag} style={{ color: "#F0DE36" }} />
          <small>Medium</small>
        </li>
        <li data-color="blue" data-priority="Low" onClick={priorityHandler}>
          <FontAwesomeIcon icon={faFlag} style={{ color: "blue" }} />
          <small>Low</small>
        </li>
      </ul>
    </div>
  );
};
export default NewTaskPriority;
