import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Main } from "./main/main";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
