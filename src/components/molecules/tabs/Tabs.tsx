import "./style.css";
import { FC } from "react";
import { Tab as TabModel } from "models/Tab";
import { Tab } from "components/atoms/tab/Tab";

export const Tabs: FC = () => {
  const tabs: TabModel[] = [
    { name: "Movies", path: "/movies" },
    { name: "TV Shows", path: "/shows" },
  ];

  return (
    <div id="tabs">
      <div className="tab-links">
        {tabs.map((item) => (
          <Tab {...item}></Tab>
        ))}
      </div>
    </div>
  );
};
