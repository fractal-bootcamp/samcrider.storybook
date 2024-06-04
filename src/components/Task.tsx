import { useState } from "react";
import s from "./styles.module.css";

type TaskProps = {
  title: string;
  description: string;
};

const Task = ({ title, description }: TaskProps) => {
  const [complete, setComplete] = useState<boolean>(false);

  const handleClick = () => {
    setComplete(!complete);
  };
  return (
    <div className={complete ? s.taskContainerComplete : s.taskContainer}>
      <div className={s.buttonContainer}>
        <button
          onClick={() => handleClick()}
          className={complete ? s.buttonComplete : s.button}
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
