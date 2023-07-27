import { faPalette, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./NewTaskTags.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useRef, useState } from "react";
const tagsColor = ["#84c6a1", "#DDE6ED", "#FFEEBB", "#74aadd", "#ec8182"];
const Tag = (props) => {
  const tagColorChangeHandler = (e) => {
    props.onChangeColor(props.id, e.target.style.backgroundColor);
  };

  const tagRemoveHandler = () => {
    props.onRemoveTag(props.id);
  };

  return (
    <li>
      <p style={{ backgroundColor: `${props.tagColor}` }}>{props.tagName}</p>
      <div className={classes["tags-row_container"]}>
        <div className={classes["tags-color_palette"]}>
          <FontAwesomeIcon icon={faPalette} />

          <ul className={classes["tags-content_menu"]}>
            {tagsColor.map((color) => (
              <li
                style={{ backgroundColor: `${color}` }}
                key={color}
                onClick={tagColorChangeHandler}
              ></li>
            ))}
          </ul>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={tagRemoveHandler}
          style={{ color: "red", cursor: "Pointer" }}
        />
      </div>
    </li>
  );
};

const NewTaskTags = (props) => {
  const tagInputRef = useRef();
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    setTagList(props.startingTagList);
  }, []);
  const sendTagsToNewTask = () => {
    props.onHideTagCreator(tagList);
  };
  const tagRemove = (id) => {
    const newArr = tagList.filter((tag) => {
      if (tag.id !== id) {
        return tag;
      }
    });
    setTagList(newArr);
  };
  const tagColorChangeHandler = (id, color) => {
    const newArr = tagList.map((tag) => {
      if (tag.id === id) {
        return { ...tag, tagColor: color };
      } else {
        return tag;
      }
    });
    setTagList(newArr);
  };
  const addNewTagHandler = (e) => {
    e.preventDefault();
    if (tagInputRef.current.value.trim() !== "") {
      setTagList((prev) => [
        ...prev,
        {
          tagName: tagInputRef.current.value,
          id: Math.random(),
          tagColor: "#84c6a1",
        },
      ]);
      setTimeout(() => {
        tagInputRef.current.value = "";
      }, 0);
    }
  };
  return (
    <div className={classes["tags-container"]}>
      <div
        className={classes["tags-backdrop"]}
        onClick={sendTagsToNewTask}
      ></div>
      <div className={classes["tags-content"]}>
        <form onSubmit={addNewTagHandler}>
          <input type="text" placeholder="Add new tag" ref={tagInputRef} />
        </form>
        <p>press Enter to create tag</p>

        <ul className={classes["tags-content_list"]}>
          {tagList.map((tag) => {
            return (
              <Tag
                id={tag.id}
                tagColor={tag.tagColor}
                tagName={tag.tagName}
                key={tag.id}
                onChangeColor={tagColorChangeHandler}
                onRemoveTag={tagRemove}
              />
            );
          })}
        </ul>
        {tagList.length > 0 && (
          <button
            className={classes["tags-done_btn"]}
            onClick={sendTagsToNewTask}
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};
export default NewTaskTags;
