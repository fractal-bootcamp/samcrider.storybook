import s from "./styles.module.css";

export type TaskProps = {
  title: string;
  description: string;
  id: number;
  completed: boolean;
  toggleCompleted: (taskId: number) => void;
};

const Task = ({
  title,
  description,
  id,
  completed,
  toggleCompleted,
}: TaskProps) => {
  return (
    <div
      id={String(id)}
      className={completed ? s.taskContainerComplete : s.taskContainer}
    >
      <div className={s.buttonContainer}>
        <button
          onClick={() => toggleCompleted(id)}
          className={completed ? s.buttonComplete : s.button}
        ></button>
      </div>
      <div className={s.textContainer}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};

export default Task;
