import React from "react";
import Task, { TaskProps } from "../Task";

type TaskListProps = {
  tasks: TaskProps[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            id={task.id}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
