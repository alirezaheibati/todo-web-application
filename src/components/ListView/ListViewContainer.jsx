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
          userTasks.info.userTasks.map((task) => (
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
          ))}
      </ListCategory>
      <ListCategory title="In Progress" />
      <ListCategory title="Done" />
      <ListCategory title="Postponed" />
    </div>
  );
};
export default ListViewContainer;
