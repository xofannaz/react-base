import type { ReactNode } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

export const PageTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen overflow-auto">
      <Navbar />
      <div className="bg-base-100 flex flex-col items-center justify-center py-4 px-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};
