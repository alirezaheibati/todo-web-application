import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTask.module.css";
import { faCalendar, faFlag } from "@fortawesome/free-regular-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import NewTaskPriority from "./NewTaskPriority";
import NewTaskTags from "./NewTaskTags";
import { useState } from "react";
const NewTask = () => {
  const [showTags, setShowTags] = useState(false);
  const showTagsHandler = () => {
    setShowTags(true);
  };
  return (
    <div className={classes["new-task_container"]}>
      {showTags && <NewTaskTags />}
      <div className={classes["new-task_backdrop"]}></div>
      <div className={classes["new-task_content"]}>
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
              <button className={classes["new-task_btn"]} type="button">
                <FontAwesomeIcon icon={faFlag} />
                <NewTaskPriority />
              </button>

              <button
                className={classes["new-task_btn"]}
                type="button"
                onClick={showTagsHandler}
              >
                <FontAwesomeIcon icon={faTag} />
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
