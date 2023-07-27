import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTask.module.css";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { faPalette, faTags, faXmark } from "@fortawesome/free-solid-svg-icons";
import NewTaskPriority from "./NewTaskPriority";
import NewTaskTags from "./NewTaskTags";
import { useRef, useState } from "react";
import NewTaskPalette from "./NewTaskPalette";
import useHttp from "./../../hooks/use-http";
import LoadingSpinner from "./../FrequentlyUsed/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { userInfoSliceActions } from "../../store";
const NewTask = (props) => {
  const [showTags, setShowTags] = useState(false);
  const [tagsList, setTagsList] = useState([]);
  const [showPalette, setShowPalette] = useState(false);
  const [paletteColor, setPaletteColor] = useState({
    btnColor: "gray",
    BgColor: "rgb(225, 126, 128)",
  });
  const [priorityStatus, setPriorityStatus] = useState({
    color: null,
    priority: "Low",
  });

  const titleInputRef = useRef();
  const deadlineInputRef = useRef();
  const descriptionInputRef = useRef();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userInfo);
  const { error, isLoading, sendRequest } = useHttp();

  const showTagsHandler = () => {
    setShowTags(true);
  };
  const showPaletteHandler = () => {
    setShowPalette(true);
  };

  const hideTagCreatorHandler = (tags) => {
    setTagsList(tags);
    setShowTags(false);
  };
  const hidePaletteHandler = (paletteColor) => {
    setPaletteColor({
      btnColor: paletteColor,
      BgColor: paletteColor,
    });
    setShowPalette(false);
  };

  const prioritySelectionHandler = (color, priority) => {
    setPriorityStatus({ color: color, priority: priority });
  };
  const addTaskHandler = (data) => {
    console.log(data);
    dispatch(userInfoSliceActions.updateUserInfo());
    props.onCloseNewTask();
  };
  const addNewTaskHandler = (e) => {
    e.preventDefault();
    if (
      titleInputRef.current.value.trim() !== "" &&
      deadlineInputRef.current.value &&
      descriptionInputRef.current.value.trim() !== ""
    ) {
      sendRequest(
        {
          url: `https://parseapi.back4app.com/users/${localStorage.getItem(
            "userId"
          )}`,
          method: "PUT",
          headers: {
            "X-Parse-Application-Id":
              "VUBEmOkNcXSUnYBMnOj68tnzu1jnkopyO6Ow2OGb",

            "X-Parse-REST-API-Key": " NbyD4dNV7pNxrzzCRXQXLUd6cb8C2776i53CBSgW",
            "X-Parse-Session-Token": localStorage.getItem("sessionToken"),
            "Content-Type": "application/json",
          },
          body: {
            userTasks: [
              ...userData.info.userTasks,
              {
                taskId: Math.random(),
                taskName: titleInputRef.current.value,
                taskDescription: descriptionInputRef.current.value,
                taskDeadline: deadlineInputRef.current.value,
                taskCategory: "todo",
                taskPriority: priorityStatus.priority,
                taskColor: paletteColor.BgColor,
                taskTags: tagsList,
                TaskComments: [],
              },
            ],
          },
        },
        addTaskHandler
      );
    }
  };

  return (
    <div className={classes["new-task_container"]}>
      {showTags && (
        <NewTaskTags
          onHideTagCreator={hideTagCreatorHandler}
          startingTagList={tagsList}
        />
      )}
      {showPalette && <NewTaskPalette onHidePalette={hidePaletteHandler} />}
      {isLoading && <LoadingSpinner />}

      <div className={classes["new-task_backdrop"]}></div>
      <div className={classes["new-task_content"]}>
        <FontAwesomeIcon
          icon={faXmark}
          className={classes["new-task_closeBtn"]}
          onClick={() => {
            props.onCloseNewTask();
          }}
        />
        <h3>Create new task</h3>
        <form onSubmit={addNewTaskHandler}>
          <div className={classes["new-task_info"]}>
            <label htmlFor="new-task_title">Task title:</label>
            <input
              type="text"
              id="new-task_title"
              placeholder="Title"
              ref={titleInputRef}
            />
          </div>
          <div className={classes["new-task_info"]}>
            <label htmlFor="new-task_deadline">deadline:</label>
            <input type="date" id="new-task_deadline" ref={deadlineInputRef} />
          </div>
          <textarea
            placeholder="Task description"
            ref={descriptionInputRef}
          ></textarea>
          <div className={classes["new-task_actions"]}>
            <div className={classes["new-task_btn-container"]}>
              <button
                className={classes["new-task_btn"]}
                type="button"
                style={{
                  borderColor: `${
                    priorityStatus.color ? priorityStatus.color : "gray"
                  }`,
                }}
              >
                <FontAwesomeIcon
                  icon={faFlag}
                  style={{
                    color: `${
                      priorityStatus.color ? priorityStatus.color : "gray"
                    }`,
                  }}
                />
                <NewTaskPriority onSelectPriority={prioritySelectionHandler} />
              </button>

              <button
                className={classes["new-task_btn"]}
                type="button"
                onClick={showTagsHandler}
                style={{
                  borderColor: `${tagsList.length > 0 ? "#3CB371" : "gray"}`,
                }}
              >
                <FontAwesomeIcon
                  icon={faTags}
                  style={{
                    color: `${tagsList.length > 0 ? "#3CB371" : "gray"}`,
                  }}
                />
              </button>
              <button
                className={classes["new-task_btn"]}
                type="button"
                onClick={showPaletteHandler}
                style={{ borderColor: paletteColor.btnColor }}
              >
                <FontAwesomeIcon
                  icon={faPalette}
                  style={{ color: paletteColor.btnColor }}
                />
              </button>
            </div>
            <button className={classes["new-task_submit"]} type="submit">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewTask;
