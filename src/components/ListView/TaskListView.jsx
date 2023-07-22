import classes from "./TaskListView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faPenSquare,
  faPenToSquare,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
const TaskListView = (props) => {
  return (
    <div className={`${classes["list-category_container"]}`}>
      <div className={classes["list-category_title"]}>
        <div></div>
        <p>title for task 1</p>
      </div>

      <ul className={classes["list-category_content"]}>
        <li title={props.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad
          adipisci ratione voluptate error accusantium unde earum, veniam odio
          nesciunt beatae nemo iusto cupiditate tempora quod hic animi libero
          dolore?
        </li>
        <li>27 of July</li>
        <li>
          <FontAwesomeIcon icon={faFlag} />
        </li>

        <li>
          <FontAwesomeIcon
            icon={faPenToSquare}
            title="edit task"
            style={{ marginRight: "8px" }}
          />
          <FontAwesomeIcon icon={faRemove} title="remove task" />
        </li>
      </ul>
    </div>
  );
};
export default TaskListView;
