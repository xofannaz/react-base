import { Tab } from "./tab";
import type { TabListProps } from "./tabList.types";

export const TabList = ({ tabs }: TabListProps) => (
  <div
    role="tablist"
    className="tabs lg:tabs-md md:tabs-md tabs-xs tabs-lifted"
  >
    {tabs.map(({ id, name, label, isDefaultChecked, children }) => (
      <Tab
        key={id}
        name={name}
        label={label}
        isDefaultChecked={isDefaultChecked}
      >
        {children}
      </Tab>
    ))}
  </div>
);
