import { FC, useState } from "react";
import { Basket } from "../basket/basket";
import { FlexContainer } from "../containers/flex-container/flex-container";
import { InnerLink } from "../inner-link/inner-link";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import styles from "./navigation.module.scss";
import { BurgerMenu } from "./burger-menu";
import { BurgerButton } from "./burger-button";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <FlexContainer align="center" height="full" justify="between" gap={104}>
        {primaryNavigation}
        <BurgerButton
          onClick={() => {
            setIsOpen((prev) => {
              return !prev;
            });
          }}
        />
      </FlexContainer>
    </nav>
  );
};

const primaryNavigation = (
  <>
    <div>
      <Logo />
    </div>
    <FlexContainer gap={76} isGrow className={styles.primaryNavigation}>
      <FlexContainer justify="between" isGrow className={styles.innerLinkWrapper}>
        <InnerLink to="/faq">FAQ</InnerLink>
        <InnerLink to="/payment">Оплата и доставка</InnerLink>
        <InnerLink to="/return">Возврат</InnerLink>
        <InnerLink to="/research">Исследования</InnerLink>
        <InnerLink to="/owner-room">Личный кабинет</InnerLink>
        <a className={styles.phoneNumber} href="tel:8-8-800-600-09-90">
          8 8 (800) 600-09-90
        </a>
      </FlexContainer>
      <Basket />
    </FlexContainer>
  </>
);
