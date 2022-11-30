import { FC } from "react";
import { FlexContainer } from "../containers/flex-container/flex-container";
import styles from "./card.module.scss";

interface IProps {
  src: string;
  alt: string;
  firsRow: string;
  secondRow: string;
}

export const Card: FC<IProps> = ({ src, alt, firsRow, secondRow }) => {
  return (
    <FlexContainer align="center" direction="column" gap={78}>
      <img src={src} alt={alt} />
      <FlexContainer direction="column" align="center">
        <span className={styles.firsRow}>{firsRow}</span>
        <span className={styles.secondRow}>{secondRow}</span>
      </FlexContainer>
    </FlexContainer>
  );
};
