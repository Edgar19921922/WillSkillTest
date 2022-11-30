import cn from "classnames";
import { TFCChildren } from "../../interfaces/fc";
import { THeight } from "../../interfaces/styles-props";

import styles from "./container.module.scss";

interface IProps {
  height?: THeight;
}

export const Container: TFCChildren<IProps> = ({ children, height }) => (
  <div
    className={cn(styles.container, {
      [styles[`height-${height}`]]: height,
    })}
  >
    {children}
  </div>
);
