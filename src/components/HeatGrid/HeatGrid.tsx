import GridBlock from "../GridBlock/GridBlock";
import s from "./styles.module.css";

const days = [
  { id: 0, day: "Mon" },
  { id: 1, day: "Tues" },
  { id: 2, day: "Wed" },
  { id: 3, day: "Thurs" },
  { id: 4, day: "Fri" },
  { id: 5, day: "Sat" },
  { id: 6, day: "Sun" },
];
const data = ["#f0f6fc", "#c5d9ed", "#9ec2e6", "#72aee6", "#4f94d4", "#3582c4"];

// just for mapping purposes
const dayColumn = [0, 1, 2, 3, 4, 5];

const HeatGrid = () => {
  return (
    <div className={s.dayContainer}>
      {days.map((d) => {
        return (
          <div key={d.id} className={s.dayColumn}>
            {d.day}
            {dayColumn.map((day) => {
              const randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
              return <GridBlock key={day} dataColor={data[randomNum]} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HeatGrid;
