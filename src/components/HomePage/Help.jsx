import classes from "./Help.module.css";
const Help = (props) => {
  const helpCloseHandler = () => {
    props.onCloseHelp();
  };
  return (
    <div className={classes["help_container"]}>
      <div className={classes["help_backdrop"]}></div>
      <div className={classes["help_content"]}>
        <h2>How to handle tasks</h2>
        <ul>
          <li>
            to <b>Change tasks category</b>, drag task and drop it inside
            desired category.
          </li>
          <li>
            to <b>add new task</b>, use Plus sign inside the Todo Category.
          </li>

          <li>
            you can <b>remove tasks </b>clicking the remove buttom inside each
            task.
          </li>
        </ul>
        <button
          onClick={helpCloseHandler}
          className={classes["help_content-confirm"]}
        >
          Okay
        </button>
      </div>
    </div>
  );
};
export default Help;
