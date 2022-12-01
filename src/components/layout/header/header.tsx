import { FC } from "react";

import { Container } from "../../containers/container/container";
import { FlexContainer } from "../../containers/flex-container/flex-container";
import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";

import { InnerLink } from "../../inner-link/inner-link";

import styles from "./header.module.scss";
import { Basket } from "../../basket/basket";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <FlexContainer align="center" height="full">
        <Container>
          <nav>
            <FlexContainer
              align="center"
              height="full"
              justify="between"
              gap={104}
            >
              <div>
                <Logo />
              </div>
              <FlexContainer gap={76}>
                <FlexContainer gap={40}>
                  <InnerLink to="/faq">FAQ</InnerLink>
                  <InnerLink to="/payment">Оплата и доставка</InnerLink>
                  <InnerLink to="/return">Возврат</InnerLink>
                  <InnerLink to="/research">Исследования</InnerLink>
                  <InnerLink to="/owner-room">Личный кабинет</InnerLink>
                  <a
                    className={styles.phoneNumber}
                    href="tel:8-8-800-600-09-90"
                  >
                    8 8 (800) 600-09-90
                  </a>
                </FlexContainer>
                <Basket />
              </FlexContainer>
            </FlexContainer>
          </nav>
        </Container>
      </FlexContainer>
    </header>
  );
};
