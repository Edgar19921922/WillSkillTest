import { Dispatch, FC, SetStateAction } from "react";
import { InnerLink } from "../inner-link/inner-link";
import { Menu, Item } from "burger-menu";
import styles from "./navigation.module.scss";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        style={{
          color: "white",
        }}
        onClick={() => {
          setIsOpen((prev) => {
            return !prev;
          });
        }}
      ></div>

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <InnerLink to="/faq">
          <Item text="FAQ" itemKey="dc" />
        </InnerLink>
        <InnerLink to="/payment">
          <Item text="Оплата и доставка" itemKey="payment" />
        </InnerLink>
        <InnerLink to="/return">
          <Item text="Возврат" itemKey="return" />
        </InnerLink>
        <InnerLink to="/research">
          <Item text="Исследования" itemKey="research" />
        </InnerLink>
        <InnerLink to="/owner-room">
          <Item text="Личный кабинет" itemKey="owner-room" />
        </InnerLink>
        <a className={styles.phoneNumber} href="tel:8-8-800-600-09-90">
          <Item text="8 8 (800) 600-09-90" itemKey="tel" />
        </a>
      </Menu>
    </>
  );
};
