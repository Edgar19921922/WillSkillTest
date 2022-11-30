import { FC } from "react";
import { Header } from "./header/header";
import { Main } from "./main/main";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
