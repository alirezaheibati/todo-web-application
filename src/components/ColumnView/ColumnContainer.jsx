import ColumnCategory from "./ColumnCategory";
import classes from "./ColumnContainer.module.css";
import TaskColumnView from "./TaskColumnView";
const ColumnContainer = (props) => {
  return (
    <div className={classes["column-container"]}>
      <ColumnCategory title="Todo" borderColor="#ff8b4c">
        <TaskColumnView />
        <TaskColumnView />
        <TaskColumnView />
      </ColumnCategory>
      <ColumnCategory title="In Progress" borderColor="#2ea0f4" />
      <ColumnCategory title="completed" borderColor="#00b56f" />
      <ColumnCategory title="Postponed" borderColor="#ff0000" />
    </div>
  );
};
export default ColumnContainer;
