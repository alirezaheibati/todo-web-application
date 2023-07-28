import classes from "./TaskListView.module.css";
import useHttp from "../../hooks/use-http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faPenSquare,
  faPenToSquare,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSliceActions } from "../../store";
const TaskListView = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userInfo);

  const { isLoading, error, sendRequest } = useHttp();
  const removeTaskResultHandler = (data) => {
    console.log(data);
    dispatch(userInfoSliceActions.updateUserInfo());
  };
  const removeTaskHandler = () => {
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

  return (
    <div className={`${classes["list-category_container"]}`}>
      <div className={classes["list-category_title"]}>
        <div style={{ backgroundColor: props.taskColor }}></div>
        <p>{props.title}</p>
      </div>

      <ul className={classes["list-category_content"]}>
        <li title={props.description}>{props.description}</li>
        <li>{props.deadline}</li>
        <li>
          <FontAwesomeIcon
            icon={faFlag}
            title={props.priority}
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
          />
        </li>

        <li>
          <FontAwesomeIcon
            icon={faPenToSquare}
            title="edit task"
            style={{ marginRight: "8px" }}
          />
          <FontAwesomeIcon
            icon={faRemove}
            title="remove task"
            onClick={removeTaskHandler}
            style={{ color: "red", cursor: "pointer" }}
          />
        </li>
      </ul>
    </div>
  );
};
export default TaskListView;
