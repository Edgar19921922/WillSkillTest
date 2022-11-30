import { FC } from "react";

import { Container } from "../../containers/container/container";
import { FlexContainer } from "../../containers/flex-container/flex-container";
import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";
import { ReactComponent as Icon } from "../../../assets/icons/basket.svg";
import { InnerLink } from "../../inner-link/inner-link";

import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <FlexContainer align="center" height="full">
        <Container>
          <nav>
            <FlexContainer align="center" height="full" justify="between">
              <Logo />
              <FlexContainer gap={40}>
                <InnerLink to="">FAQ</InnerLink>
                <InnerLink to="">Оплата и доставка</InnerLink>
                <InnerLink to="">Возврат</InnerLink>
                <InnerLink to="">Исследования</InnerLink>
                <InnerLink to="">Личный кабинет</InnerLink>
              </FlexContainer>
              <a className={styles.phoneNumber} href="tel:8-8-800-600-09-90">
                8 8 (800) 600-09-90
              </a>
              <Icon />
            </FlexContainer>
          </nav>
        </Container>
      </FlexContainer>
    </header>
  );
};
