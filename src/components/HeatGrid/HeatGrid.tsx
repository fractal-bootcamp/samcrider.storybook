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
const randomizedData = data
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const HeatGrid = () => {
  return (
    <div className={s.dayContainer}>
      {days.map((d) => {
        return (
          <div key={d.id} className={s.dayColumn}>
            {d.day}
            <GridBlock dataColor={randomizedData[0]} />
            <GridBlock dataColor={randomizedData[1]} />
            <GridBlock dataColor={randomizedData[2]} />
            <GridBlock dataColor={randomizedData[3]} />
            <GridBlock dataColor={randomizedData[4]} />
          </div>
        );
      })}
    </div>
  );
};

export default HeatGrid;
