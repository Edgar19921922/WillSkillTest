import { FC } from "react";
import { Container } from "../../../components/containers/container/container";
import { FlexContainer } from "../../../components/containers/flex-container/flex-container";
import { P } from "../../../components/p/p";
import { Title } from "../../../components/title/title";

import mainImg from "../../../assets/images/main-img.png";

import styles from "./product.module.scss";

export const Product: FC = () => {
  return (
    <section className={styles.product}>
      <Container>
        <FlexContainer justify="between">
          <div>
            <Title className={styles.title}>АКТИВИРУЙ ИММУНИТЕТ!</Title>
            <P className={styles.titleDescription} fontSize="24">
              Всего пять секунд в день помогут укрепить иммунитет и повысить
              защитные силы организма
            </P>
            <Title
              className={styles.subTitle}
              title="h3"
              color="black"
              fontSize="36"
              fontWeight="700"
            >
              NOOTRIS ПОМОГАЕТ
            </Title>
            <P className={styles.subTitleDescription} fontSize="18">
              Вашему организму во время пандемии и сезонных простуд
            </P>
          </div>
          <div className={styles.mainImgWrapper}>
            <img className={styles.mainImg} src={mainImg} alt="nooTRiS" />
          </div>
        </FlexContainer>
      </Container>
    </section>
  );
};
