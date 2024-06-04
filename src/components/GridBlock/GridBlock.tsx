import s from "./styles.module.css";

type GridBlockProps = {
  dataColor: string;
};

const GridBlock = ({ dataColor }: GridBlockProps) => {
  return (
    <div className={s.block} style={{ backgroundColor: `${dataColor}` }}></div>
  );
};

export default GridBlock;
