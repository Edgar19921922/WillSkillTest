import { FC, useState } from "react";

import { ReactComponent as BasketIcon } from "../../assets/icons/basket.svg";

import styles from "./basket.module.scss";

export const Basket: FC = () => {
  const [count] = useState(3);
  return (
    <div className={styles.wrapper}>
      <BasketIcon />
      <span className={styles.count}>{count}</span>
    </div>
  );
};
