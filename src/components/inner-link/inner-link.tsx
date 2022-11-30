import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./inner-link.module.scss";

interface IInnerLinkProps {
  to: string;
  children: ReactNode;
}

export const InnerLink: FC<IInnerLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive
          ? cn(styles.navLink, styles.activeClassName)
          : styles.navLink;
      }}
    >
      {children}
    </NavLink>
  );
};
