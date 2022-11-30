import { TFCChildren } from "../interfaces/fc";
import cn from "classnames";
import styles from "./price.module.scss";

interface IProps {
  currency?: "₽";
  variation: "old" | "new";
}

export const Price: TFCChildren<IProps> = ({
  children,
  currency = "₽",
  variation,
}) => {
  return (
    <span
      className={cn({
        [styles[variation]]: variation,
      })}
    >
      {children} {currency}
    </span>
  );
};
