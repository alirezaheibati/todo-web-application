import { useState } from "react";
import NewTask from "../NewTask/NewTask";
import classes from "./ColumnCategory.module.css";
import useHttp from "../../hooks/use-http";
import { useSelector, useDispatch } from "react-redux";
import { userInfoSliceActions } from "../../store";
import LoadingSpinner from "../FrequentlyUsed/LoadingSpinner";
const ColumnCategory = (props) => {
  const userData = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const { error, isLoading, sendRequest } = useHttp();
  const [showNewTask, setShowNewTask] = useState(false);
  const addNewTaskHandler = () => {
    setShowNewTask(true);
  };
  const closeNewTask = () => {
    setShowNewTask(false);
  };
  const dragEnterHandler = (e) => {
    e.preventDefault();
  };
  const dragLeaveHandler = (e) => {};
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const changeTaskCateGoryHandler = (data) => {
    dispatch(userInfoSliceActions.getDragedItem(null));
    dispatch(userInfoSliceActions.updateUserInfo());
  };
  const taskDropHandler = (e) => {
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
          userTasks: userData.info.userTasks.map((task) => {
            console.log(task);
            if (task.taskId !== userData.dragedTaskId) {
              console.log("yes");
              return task;
            } else {
              console.log("no");

              return {
                ...task,
                taskCategory: e.target.getAttribute("data-column-title"),
              };
            }
          }),
        },
      },
      changeTaskCateGoryHandler
    );
  };

  return (
    <div
      className={classes["column-category"]}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDrop={taskDropHandler}
      data-column-title={props.title.toLowerCase()}
    >
      {isLoading && <LoadingSpinner />}
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
