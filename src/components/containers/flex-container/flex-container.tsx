import cn from "classnames";
import { useMemo } from "react";
import { getOptionalClasses } from "../../../helpers/get-optional-props";
import { TFC } from "../../interfaces/fc";
import { THeight } from "../../interfaces/styles-props";

import styles from "./flex-container.module.scss";

interface IProps {
  direction?: "column";
  align?: "center";
  justify?: "center" | "between";
  isWrap?: boolean;
  gap?: number;
  height?: THeight;
  isGrow?: boolean;
}

export const FlexContainer: TFC<IProps> = ({
  children,
  className,
  gap,
  ...props
}) => {
  const memoizedOptionalClasses = useMemo(() => {
    return getOptionalClasses(props, styles);
  }, [props.align, props.direction, props.justify, props.isGrow, props.isWrap, props.height]);

  return (
    <div
      style={{
        gap,
      }}
      className={cn(styles.flexContainer, className, {
        ...memoizedOptionalClasses,
      })}
    >
      {children}
    </div>
  );
};
