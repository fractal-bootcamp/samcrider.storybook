import { useState } from "react";
import TabContent from "../TabContent/TabContent";
import s from "./styles.module.css";

export type Tab = {
  name: string;
  image: string;
  description: string;
};

const fakeTabs: Tab[] = [
  {
    name: "Sam",
    image: "/thoughts.png",
    description:
      "A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
  },
  {
    name: "Aiden",
    image: "/thoughts.png",
    description:
      "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
  },
  {
    name: "Jake",
    image: "/thoughts.png",
    description:
      "A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
  },
];

const TabDescriptor = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(fakeTabs[0]);

  const handleChangeTab = (tabToSet: Tab) => {
    setCurrentTab(tabToSet);
  };
  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        {fakeTabs.map((d) => {
          return (
            <button
              className={s.button}
              style={
                currentTab.name === d.name
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "transparent" }
              }
              onClick={() => handleChangeTab(d)}
            >
              {d.name}
            </button>
          );
        })}
      </div>
      <TabContent currentTab={currentTab} />
    </div>
  );
};

export default TabDescriptor;
