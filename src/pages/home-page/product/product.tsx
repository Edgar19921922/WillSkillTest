import { FC } from "react";
import { Container } from "../../../components/containers/container/container";
import { FlexContainer } from "../../../components/containers/flex-container/flex-container";
import { P } from "../../../components/p/p";
import { Title } from "../../../components/title/title";

import productSrc from "../../../assets/images/product.png";

import styles from "./product.module.scss";

export const Product: FC = () => {
  return (
    <section className={styles.product}>
      <Container>
        <FlexContainer justify="between">
          <div className={styles.mainImgWrapper}>
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
            <img className={styles.mainImg} src={productSrc} alt="nooTRiS" />
          </div>
          <div></div>
        </FlexContainer>
      </Container>
    </section>
  );
};
