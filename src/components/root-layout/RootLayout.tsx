import { ReactNode } from "react";
import MainNavigation from "../main-navigation/MainNavigation";
import './_root-layout.scss';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main className="root-layout">{children}</main>
    </>
  );
};

export default RootLayout;
