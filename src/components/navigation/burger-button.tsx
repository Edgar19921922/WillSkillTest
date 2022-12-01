import { FC } from "react";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger-menu.svg";
import styles from "./navigation.module.scss";

interface IProps {
  onClick: () => void;
}

export const BurgerButton: FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.button}>
      <BurgerIcon onClick={onClick} />
    </div>
  );
};
