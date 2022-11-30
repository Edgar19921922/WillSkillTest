import { TFC } from "../interfaces/fc";
import { TFilter } from "../interfaces/filter";

import { TFontFamily, TFontSize } from "../interfaces/styles-props";

import styles from "./p.module.scss";
import cn from "classnames";

import { getOptionalClasses } from "../../helpers/get-optional-props";

interface IProps {
  fontFamily?: TFontFamily;
  fontSize?: TFilter<TFontSize, "24" | "18">;
  fontColor?: "black";
}

export const P: TFC<IProps> = ({
  children,
  className,
  fontColor = "black",
  fontFamily = "rubik",
  fontSize,
}) => {
  return (
    <p
      className={cn(className, {
        ...getOptionalClasses({ fontColor, fontFamily, fontSize }, styles),
      })}
    >
      {children}
    </p>
  );
};
