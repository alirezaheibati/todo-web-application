import classes from "./NewTaskTags.module.css";
const NewTaskTags = () => {
  return (
    <div className={classes["tags-container"]}>
      <div className={classes["tags-content"]}>
        <form>
          <input type="text" placeholder="Search or create tag" />
        </form>
        <ul className={classes["tags-content_list"]}>
          <li>
            <p>tagName1</p>
            <div>
              <p>...</p>
              <ul className={classes["tags-content_menu"]}>
                <li>add tag</li>
                <li>remove tag</li>
              </ul>
            </div>
          </li>
          <li>
            <p>tagName2</p>
            <div>
              <p>...</p>
              <ul className={classes["tags-content_menu"]}>
                <li>add tag</li>
                <li>remove tag</li>
              </ul>
            </div>
          </li>
          <li>
            <p>tagName3</p>
            <div>
              <p>...</p>
              <ul className={classes["tags-content_menu"]}>
                <li>add tag</li>
                <li>remove tag</li>
              </ul>
            </div>
          </li>
        </ul>
        <p>press Enter to create tag</p>
      </div>
    </div>
  );
};
export default NewTaskTags;
