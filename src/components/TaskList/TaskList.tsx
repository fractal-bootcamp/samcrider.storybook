import { useState } from "react";
import Task from "../Task/Task";
import s from "./styles.module.css";

type TaskType = {
  title: string;
  description: string;
  id: number;
  completed: boolean;
};

const initialTasks: TaskType[] = [
  {
    title: "first task",
    description: "first task description",
    id: 0,
    completed: false,
  },
  {
    title: "second task",
    description: "first task description",
    id: 1,
    completed: false,
  },
  {
    title: "third task",
    description: "first task description",
    id: 2,
    completed: false,
  },
  {
    title: "fourth task",
    description: "first task description",
    id: 3,
    completed: false,
  },
  {
    title: "fifth task",
    description: "first task description",
    id: 4,
    completed: false,
  },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const sortedTasksByComplete = tasks.sort(
    (a, b) => Number(b.completed) - Number(a.completed)
  );

  const toggleCompleted = (taskId: number) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) {
      return;
    }
    taskToUpdate.completed = !taskToUpdate.completed;

    const filteredTasks = tasks
      .filter((task) => task.id !== taskId)
      .concat(taskToUpdate);

    setTasks(filteredTasks);
  };

  return (
    <div className={s.listContainer}>
      {sortedTasksByComplete.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            id={task.id}
            completed={task.completed}
            toggleCompleted={() => toggleCompleted(task.id)}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
