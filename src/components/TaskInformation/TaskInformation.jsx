import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./TaskInformation.module.css";
import {
  faFlagCheckered,
  faFolderTree,
  faTags,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faCommentDots,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
const TaskInformation = (props) => {
  const taskInfoCloseHandler = (e) => {
    e.stopPropagation();
    props.onCloseTaskInfo();
  };
  return (
    <div className={classes["task-info_container"]}>
      <div className={classes["task-info_backdrop"]}></div>
      <div className={classes["task-info_content"]}>
        <FontAwesomeIcon
          icon={faXmark}
          className={classes["task-info_close"]}
          onClick={taskInfoCloseHandler}
        />
        <div className={classes["task-info_left"]}>
          <h3>My first task</h3>
          <p className={classes["task-info_description"]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            assumenda officia dolor. Velit maiores corporis sapiente nulla quos
          </p>
          <div className={classes["task-info_details"]}>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faFolderTree} />
              </div>
              <div>
                <p>Category:</p>
                <p>In Progress</p>
              </div>
            </div>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faFlagCheckered} />
              </div>
              <div>
                <p>Deadline:</p>
                <p>4th of July</p>
              </div>
            </div>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <div>
                <p>Priority:</p>
                <p>Urgent</p>
              </div>
            </div>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faTags} />
              </div>
              <div>
                <p>Tags:</p>
                <p>tag1, tag2, tag3</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["task-info_right"]}>
          {/* <p>No Comment for this task yet</p> */}
          <ul className={classes["task-info_comments"]}>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <form>
            <div>
              <p>Comment</p>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
            <textarea placeholder="write your comment here..."></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TaskInformation;
