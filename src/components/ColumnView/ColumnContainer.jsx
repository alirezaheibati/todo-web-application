import { useState } from "react";
import ColumnCategory from "./ColumnCategory";
import classes from "./ColumnContainer.module.css";
import TaskColumnView from "./TaskColumnView";
import { useSelector } from "react-redux";
const ColumnContainer = (props) => {
  const userTasks = useSelector((store) => store.userInfo);

  return (
    <div className={classes["column-container"]}>
      <ColumnCategory title="Todo" borderColor="#ff8b4c">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "todo") {
              return (
                <TaskColumnView
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
      </ColumnCategory>
      <ColumnCategory title="In Progress" borderColor="#2ea0f4">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "in progress") {
              return (
                <TaskColumnView
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
      </ColumnCategory>
      <ColumnCategory title="completed" borderColor="#00b56f">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "completed") {
              return (
                <TaskColumnView
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
      </ColumnCategory>
      <ColumnCategory title="Postponed" borderColor="#ff0000">
        {userTasks.info.userTasks &&
          userTasks.info.userTasks.map((task) => {
            if (task.taskCategory === "postponed") {
              return (
                <TaskColumnView
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
      </ColumnCategory>
    </div>
  );
};
export default ColumnContainer;
