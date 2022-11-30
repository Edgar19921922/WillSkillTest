import cn from "classnames";
import { TFC } from "../interfaces/fc";
import { TFilter } from "../interfaces/filter";
import { TFontWeight } from "../interfaces/styles-props";
import styles from "./title.module.scss";

export interface ITitleProps {
  title?: "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: "36" | "48";
  color?: "white" | "black";
  fontWeight?: TFilter<TFontWeight, "700">;
  fontFamily?: "rubik";
}

export const Title: TFC<ITitleProps> = ({
  children,
  className,
  title,
  fontSize,
  color = "black",
  fontWeight,
  fontFamily = "rubik",
}) => {
  switch (title) {
    case "h2":
      return (
        <h2
          className={cn(className, {
            [styles[`${title}-font-size-${fontSize}`]]: fontSize === "48",
            [styles[`color-${color}`]]: color,
            [styles[`font-weight-${fontWeight}`]]: fontWeight,
            [styles[`font-family-${fontFamily}`]]: fontFamily,
          })}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(className, {
            [styles[`${title}-font-size-${fontSize}`]]: fontSize === "36",
            [styles[`color-${color}`]]: color,
            [styles[`font-weight-${fontWeight}`]]: fontWeight,
            [styles[`font-family-${fontFamily}`]]: fontFamily,
          })}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(className, {
            [styles[`${title}-font-size-${fontSize}`]]: fontSize,
            [styles[`color-${color}`]]: color,
            [styles[`font-weight-${fontWeight}`]]: fontWeight,
            [styles[`font-family-${fontFamily}`]]: fontFamily,
          })}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={cn(className, {
            [styles[`${title}-font-size-${fontSize}`]]: fontSize,
            [styles[`color-${color}`]]: color,
            [styles[`font-weight-${fontWeight}`]]: fontWeight,
            [styles[`font-family-${fontFamily}`]]: fontFamily,
          })}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={cn(className, {
            [styles[`${title}-font-size-${fontSize}`]]: fontSize,
            [styles[`color-${color}`]]: color,
            [styles[`font-weight-${fontWeight}`]]: fontWeight,
            [styles[`font-family-${fontFamily}`]]: fontFamily,
          })}
        >
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={cn(styles.h1, styles["font-family-rubik"], className)}>
          {children}
        </h1>
      );
  }
};
