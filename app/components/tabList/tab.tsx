import type { TabProps } from "./tabList.types";

export const Tab = ({
  children,
  label,
  name,
  isDefaultChecked = false,
}: TabProps) => (
  <>
    <input
      type="radio"
      role="tab"
      className="tab whitespace-nowrap text-base-content checked:[--tab-bg:var(--fallback-b3,oklch(var(--b3)))]"
      name={name}
      aria-label={label}
      defaultChecked={isDefaultChecked}
    />
    <div
      role="tabpanel"
      className="tab-content bg-base-300 lg:max-w-none md:max-w-none max-w-80 shadow-xl"
    >
      {children}
    </div>
  </>
);
