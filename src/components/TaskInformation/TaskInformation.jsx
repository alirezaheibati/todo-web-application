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
import useHttp from "../../hooks/use-http";
import { useRef } from "react";
import { useSelector } from "react-redux";
const TaskInformation = (props) => {
  const { error, isLoading, sendRequest } = useHttp();
  const commentInputRef = useRef();
  const userData = useSelector((store) => store.userInfo);
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
          <h3>{props.title}</h3>
          <p className={classes["task-info_description"]}>
            {props.description}
          </p>
          <div className={classes["task-info_details"]}>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faFolderTree} />
              </div>
              <div>
                <p>Category:</p>
                <p>{props.category}</p>
              </div>
            </div>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faFlagCheckered} />
              </div>
              <div>
                <p>Deadline:</p>
                <p>{props.deadline}</p>
              </div>
            </div>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <div>
                <p>Priority:</p>
                <p>{props.priority}</p>
              </div>
            </div>
            <div className={classes["task-info_details-box"]}>
              <div>
                <FontAwesomeIcon icon={faTags} />
              </div>
              <div>
                <p>Tags:</p>
                <p>{String(props.tags.map((tag) => tag.tagName))}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["task-info_right"]}>
          {!props.comments && <p>No Comment for this task yet</p>}
          <ul className={classes["task-info_comments"]}>
            {props.comments &&
              props.comments.map((comment) => (
                <li key={comment.id}>{comment.message}</li>
              ))}
          </ul>
          <form>
            <div>
              <p>Comment</p>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
            <textarea
              placeholder="write your comment here..."
              ref={commentInputRef}
            ></textarea>
            <button type="button">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TaskInformation;
