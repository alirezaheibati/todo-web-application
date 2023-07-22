import ListCategory from "./ListCategory";
import classes from "./ListViewContainer.module.css";
import TaskListView from "./TaskListView";
const ListViewContainer = () => {
  return (
    <div className={classes["list-view_container"]}>
      <ListCategory title="Todo">
        <TaskListView />
        <TaskListView />
        <TaskListView />
      </ListCategory>
      <ListCategory title="In Progress" />
      <ListCategory title="Done" />
      <ListCategory title="Postponed" />
    </div>
  );
};
export default ListViewContainer;
