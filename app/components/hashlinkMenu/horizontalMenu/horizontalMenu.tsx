import type { ReactNode } from "react";

export interface HorizontalProps {
  children: ReactNode;
}

export const HorizontalMenu = ({ children }: HorizontalProps) => (
  <ul className="menu menu-horizontal px-1">{children}</ul>
);
