import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTask.module.css";
import { faCalendar, faFlag } from "@fortawesome/free-regular-svg-icons";
import { faPalette, faTag, faXmark } from "@fortawesome/free-solid-svg-icons";
import NewTaskPriority from "./NewTaskPriority";
import NewTaskTags from "./NewTaskTags";
import { useState } from "react";
import NewTaskPalette from "./NewTaskPalette";
const NewTask = (props) => {
  const [showTags, setShowTags] = useState(false);
  const [tagsList, setTagsList] = useState([]);

  const [showPalette, setShowPalette] = useState(false);
  const [paletteColor, setPaletteColor] = useState("gray");

  const [priorityFlagColor, setPriorityFlagColor] = useState(null);
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
    setPaletteColor(paletteColor);
    setShowPalette(false);
  };

  const prioritySelectionHandler = (color) => {
    setPriorityFlagColor(color);
  };

  return (
    <div className={classes["new-task_container"]}>
      {showTags && <NewTaskTags onHideTagCreator={hideTagCreatorHandler} />}
      {showPalette && <NewTaskPalette onHidePalette={hidePaletteHandler} />}

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
        <form>
          <div className={classes["new-task_info"]}>
            <label htmlFor="new-task_title">Task title:</label>
            <input type="text" id="new-task_title" placeholder="Title" />
          </div>
          <div className={classes["new-task_info"]}>
            <label htmlFor="new-task_deadline">deadline:</label>
            <input type="date" id="new-task_deadline" />
          </div>
          <textarea placeholder="Task description"></textarea>
          <div className={classes["new-task_actions"]}>
            <div className={classes["new-task_btn-container"]}>
              <button
                className={classes["new-task_btn"]}
                type="button"
                style={{
                  borderColor: `${
                    priorityFlagColor ? priorityFlagColor : "gray"
                  }`,
                }}
              >
                <FontAwesomeIcon
                  icon={faFlag}
                  style={{
                    color: `${priorityFlagColor ? priorityFlagColor : "gray"}`,
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
                  icon={faTag}
                  style={{
                    color: `${tagsList.length > 0 ? "#3CB371" : "gray"}`,
                  }}
                />
              </button>
              <button
                className={classes["new-task_btn"]}
                type="button"
                onClick={showPaletteHandler}
                style={{ borderColor: paletteColor }}
              >
                <FontAwesomeIcon
                  icon={faPalette}
                  style={{ color: paletteColor }}
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
