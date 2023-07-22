import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./ListCategory.module.css";
import { useState } from "react";
const ListCategory = (props) => {
  const [listCatview, setListCatview] = useState(true);
  const listViewHandler = () => {
    setListCatview((prev) => !prev);
  };
  return (
    <div
      className={`${classes["list-category_children"]} ${
        !listCatview ? classes["list-category_collapse"] : ""
      }`}
    >
      <div className={`${classes["list-category_container"]} `}>
        <div className={classes["list-category_title"]}>
          <button
            onClick={listViewHandler}
            className={`${!listCatview ? classes["list-btn_collapse"] : ""}`}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <p>
            {props.title} <span>3</span>
          </p>
        </div>

        <ul className={classes["list-category_content"]}>
          <li>Description</li>
          <li>Deadline</li>
          <li>Priority</li>
          <li>Setting</li>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
export default ListCategory;
