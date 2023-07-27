import classes from "./TaskColumnView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faPenToSquare,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import TaskInformation from "../TaskInformation/TaskInformation";
import { useState } from "react";
const TaskColumnView = (props) => {
  const [taskInfoVisibility, setTaskInfoVisibility] = useState(false);
  const taskInfoShowHandler = () => {
    setTaskInfoVisibility(true);
  };
  const taskInfoCloseHandler = () => {
    setTaskInfoVisibility(false);
  };
  return (
    <>
      {taskInfoVisibility && (
        <TaskInformation
          onCloseTaskInfo={taskInfoCloseHandler}
          deadline={props.deadline}
          title={props.title}
          description={props.description}
          tags={props.tags}
          priority={props.priority}
          id={props.id}
          category={props.category}
          comments={props.comments}
        />
      )}
      <div
        className={classes["task-column_container"]}
        onClick={taskInfoShowHandler}
        style={{ backgroundColor: props.taskColor }}
      >
        <div className={classes["task-column_header"]}>
          <div title="deadline">
            <FontAwesomeIcon icon={faFlagCheckered} />
            <p>{props.deadline}</p>
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

        <h2 className={classes["task-column_title"]}>{props.title}</h2>
        <div className={classes["task-column_description"]}>
          <p>{props.description}</p>
        </div>
        <div className={classes["task-column_tags"]}>
          <div>
            {props.tags.map((tag) => (
              <p key={tag.id} style={{ backgroundColor: tag.tagColor }}>
                {tag.tagName}
              </p>
            ))}
          </div>
          <button>
            <FontAwesomeIcon
              icon={faFlag}
              style={{
                color: `${
                  props.priority === "Urgent"
                    ? "red"
                    : props.priority === "High"
                    ? "Orange"
                    : props.priority === "Medium"
                    ? "Orange"
                    : "blue"
                }`,
              }}
              title={props.priority}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default TaskColumnView;
