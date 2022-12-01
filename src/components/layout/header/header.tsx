import { FC } from "react";

import { Container } from "../../containers/container/container";
import { FlexContainer } from "../../containers/flex-container/flex-container";
import { Navigation } from "../../navigation/navigation";

import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <FlexContainer align="center" height="full">
        <Container>
          <Navigation />
        </Container>
      </FlexContainer>
    </header>
  );
};
