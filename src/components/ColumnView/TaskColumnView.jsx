import classes from "./TaskColumnView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faPenToSquare,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
const TaskColumnView = (props) => {
  return (
    <div className={classes["task-column_container"]}>
      <div className={classes["task-column_header"]}>
        <div title="deadline">
          <FontAwesomeIcon icon={faFlagCheckered} />
          <p>14 of july</p>
        </div>
        <button className={classes["task-column_menu"]}>
          <p>...</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPenToSquare} />
              <p>Edit</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faRemove} style={{ color: "red" }} />
              <p>Remove</p>
            </li>
          </ul>
        </button>
      </div>

      <h2 className={classes["task-column_title"]}>title task title</h2>
      <div className={classes["task-column_description"]}>
        <p>
          some text about task some text about some text about some text about
          task some text about
        </p>
      </div>
      <div className={classes["task-column_tags"]}>
        <div>
          <p>tag 1</p>
          <p>tag 2</p>
          <p>tag 3</p>
        </div>
        <button title="set Priority">
          <FontAwesomeIcon icon={faFlag} />
          <ul>
            <li>
              <FontAwesomeIcon icon={faFlag} style={{ color: "red" }} />
              <p>Urgent</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faFlag} style={{ color: "orange" }} />
              <p>High</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faFlag} style={{ color: "F0DE36" }} />
              <p>Medium</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faFlag} style={{ color: "blue" }} />
              <p>Low</p>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};
export default TaskColumnView;
