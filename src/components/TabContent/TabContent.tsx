import { Tab } from "../TabDescriptor/TabDescriptor";
import s from "./styles.module.css";

type TabContentProps = {
  currentTab: Tab;
};

const TabContent = ({ currentTab }: TabContentProps) => {
  return (
    <div className={s.contentContainer}>
      <img
        src={currentTab.image}
        alt={currentTab.name}
        width={48}
        height={48}
        className={s.image}
      />
      <div className={s.description}>{currentTab.description}</div>
    </div>
  );
};

export default TabContent;
