import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTask.module.css";
import { faCalendar, faFlag } from "@fortawesome/free-regular-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
const NewTask = () => {
  return (
    <div className={classes["new-task_container"]}>
      <div className={classes["new-task_backdrop"]}></div>
      <div className={classes["new-task_content"]}>
        <h3>Create new task</h3>
        <form>
          <div className={classes["new-task_info"]}>
            <label htmlFor="new-task_title">Task title:</label>
            <input type="text" id="new-task_title" placeholder="Title" />
          </div>
          <textarea placeholder="Task description"></textarea>
          <div className={classes["new-task_actions"]}>
            <div className={classes["new-task_btn-container"]}>
              <button className={classes["new-task_btn"]}>
                <FontAwesomeIcon icon={faFlag} />
              </button>
              <button className={classes["new-task_btn"]}>
                <FontAwesomeIcon icon={faCalendar} />
              </button>
              <button className={classes["new-task_btn"]}>
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
