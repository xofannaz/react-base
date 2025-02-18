import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar, type NavbarProps } from "./navbar";

export interface PageTemplateProps {
  children: ReactNode;
  navbarProps: NavbarProps;
}

export const PageTemplate = ({ children, navbarProps }: PageTemplateProps) => {
  return (
    <div className="h-screen w-screen overflow-auto">
      <Navbar {...navbarProps} />
      <div className="bg-base-100 flex flex-col items-center justify-center py-4 px-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};
