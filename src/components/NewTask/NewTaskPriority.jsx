import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTaskPriority.module.css";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
const NewTaskPriority = (props) => {
  return (
    <div className={classes["task-priority_container"]}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faFlag} style={{ color: "red" }} />
          <small>Urgent</small>
        </li>
        <li>
          <FontAwesomeIcon icon={faFlag} style={{ color: "orange" }} />
          <small>High</small>
        </li>
        <li>
          <FontAwesomeIcon icon={faFlag} style={{ color: "#F0DE36" }} />
          <small>Medium</small>
        </li>
        <li>
          <FontAwesomeIcon icon={faFlag} style={{ color: "blue" }} />
          <small>Low</small>
        </li>
      </ul>
    </div>
  );
};
export default NewTaskPriority;
