import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import type { ReactNode } from "react";

export interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => (
  <div className="dropdown">
    <button className="btn btn-ghost mr-2">
      <Bars3CenterLeftIcon stroke="currentColor" className="h-5 w-5" />
    </button>
    <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {children}
    </ul>
  </div>
);
