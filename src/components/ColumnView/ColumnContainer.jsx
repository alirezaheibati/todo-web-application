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
          userTasks.info.userTasks.map((task) => (
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
          ))}
      </ColumnCategory>
      <ColumnCategory title="In Progress" borderColor="#2ea0f4" />
      <ColumnCategory title="completed" borderColor="#00b56f" />
      <ColumnCategory title="Postponed" borderColor="#ff0000" />
    </div>
  );
};
export default ColumnContainer;
