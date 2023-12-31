import ListCategory from "./ListCategory";
import classes from "./ListViewContainer.module.css";
import { useSelector } from "react-redux";

import TaskListView from "./TaskListView";
const ListViewContainer = () => {
  const userTasks = useSelector((store) => store.userInfo);

  return (
    <div className={classes["list-view_container"]}>
      <ListCategory title="Todo">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "todo") {
              return (
                <TaskListView
                  deadline={task.taskDeadline}
                  title={task.taskName}
                  description={task.taskDescription}
                  tags={task.taskTags}
                  taskColor={task.taskColor}
                  priority={task.taskPriority}
                  id={task.taskId}
                  category={task.taskCategory}
                  key={task.taskId}
                  comments={task.TaskComments}
                />
              );
            }
          })}
      </ListCategory>
      <ListCategory title="In Progress">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "in progress") {
              return (
                <TaskListView
                  deadline={task.taskDeadline}
                  title={task.taskName}
                  description={task.taskDescription}
                  tags={task.taskTags}
                  taskColor={task.taskColor}
                  priority={task.taskPriority}
                  id={task.taskId}
                  category={task.taskCategory}
                  key={task.taskId}
                  comments={task.TaskComments}
                />
              );
            }
          })}
      </ListCategory>
      <ListCategory title="Completed">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "completed") {
              return (
                <TaskListView
                  deadline={task.taskDeadline}
                  title={task.taskName}
                  description={task.taskDescription}
                  tags={task.taskTags}
                  taskColor={task.taskColor}
                  priority={task.taskPriority}
                  id={task.taskId}
                  category={task.taskCategory}
                  key={task.taskId}
                  comments={task.TaskComments}
                />
              );
            }
          })}
      </ListCategory>
      <ListCategory title="Postponed">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "postponed") {
              return (
                <TaskListView
                  deadline={task.taskDeadline}
                  title={task.taskName}
                  description={task.taskDescription}
                  tags={task.taskTags}
                  taskColor={task.taskColor}
                  priority={task.taskPriority}
                  id={task.taskId}
                  category={task.taskCategory}
                  key={task.taskId}
                  comments={task.TaskComments}
                />
              );
            }
          })}
      </ListCategory>
    </div>
  );
};
export default ListViewContainer;
