import { FC } from "react";
import { Order } from "./order/order";
import { Product } from "./product/product";

export const HomePage: FC = () => {
  return (
    <>
      <Product />
      <Order />
    </>
  );
};
