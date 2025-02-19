import type { ReactNode } from "react";

export interface TabProps {
  children: ReactNode;
  isDefaultChecked: boolean;
  label: string;
  name: string;
}

export interface TabListProps {
  tabs: (TabProps & { id: string })[];
}
