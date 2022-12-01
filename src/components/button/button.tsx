import { TFC } from "../interfaces/fc";
import cn from "classnames";

import styles from "./button.module.scss";

interface IProps {
  onClick?: () => void;
  variant?: "primary";
}

export const Button: TFC<IProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
}) => {
  return (
    <button
      className={cn(className, styles[`variant-${variant}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
