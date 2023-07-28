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
import useHttp from "../../hooks/use-http";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSliceActions } from "../../store";
const TaskColumnView = (props) => {
  const { isLoading, error, sendRequest } = useHttp();
  const [taskInfoVisibility, setTaskInfoVisibility] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userInfo);
  const taskInfoShowHandler = () => {
    setTaskInfoVisibility(true);
  };
  const taskInfoCloseHandler = () => {
    setTaskInfoVisibility(false);
  };
  const removeTaskResultHandler = (data) => {
    console.log(data);
    dispatch(userInfoSliceActions.updateUserInfo());
  };
  const removeTaskHandler = (e) => {
    e.stopPropagation();
    sendRequest(
      {
        url: `https://parseapi.back4app.com/users/${localStorage.getItem(
          "userId"
        )}`,
        method: "PUT",
        headers: {
          "X-Parse-Application-Id": "VUBEmOkNcXSUnYBMnOj68tnzu1jnkopyO6Ow2OGb",

          "X-Parse-REST-API-Key": " NbyD4dNV7pNxrzzCRXQXLUd6cb8C2776i53CBSgW",
          "X-Parse-Session-Token": localStorage.getItem("sessionToken"),
          "Content-Type": "application/json",
        },
        body: {
          userTasks: userData.info.userTasks.filter(
            (task) => task.taskId !== props.id
          ),
        },
      },
      removeTaskResultHandler
    );
  };

  //drag code
  const dragStartHandler = () => {
    dispatch(userInfoSliceActions.getDragedItem(props.id));
  };
  const dragEndHandler = () => {
    // dispatch(userInfoSliceActions.getDragedItem(null));
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
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        draggable={true}
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
              {/* <li>
                <FontAwesomeIcon icon={faPenToSquare} />
                <p>Edit</p>
              </li> */}
              <li onClick={removeTaskHandler}>
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
                    ? "#FFE17B"
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
