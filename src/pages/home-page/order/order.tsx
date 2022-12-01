import { FC } from "react";
import { Card } from "../../../components/card/card";
import { Container } from "../../../components/containers/container/container";
import { FlexContainer } from "../../../components/containers/flex-container/flex-container";
import { Price } from "../../../components/price/price";
import { Title } from "../../../components/title/title";

import ginger from "../../../assets/images/ginger.png";
import nootris from "../../../assets/images/nootris.png";
import virus from "../../../assets/images/virus.png";

import styles from "./order.module.scss";

export const Order: FC = () => {
  return (
    <section className={styles.order}>
      <Container>
        <FlexContainer justify="center" direction="column">
          <Title
            title="h2"
            color="white"
            fontSize="48"
            className={styles.orderTitle}
          >
            <span>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</span>
            <span className={styles.orange}>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
          </Title>
          <FlexContainer
            align="center"
            gap={32}
            justify="center"
            className={styles.price}
          >
            <Price variation="old">750</Price>
            <Price variation="new">690</Price>
          </FlexContainer>
          <FlexContainer
            justify="center"
            gap={112}
            className={styles.productsImg}
          >
            <Card
              firsRow="Содержит"
              secondRow="имбирь"
              src={ginger}
              alt="no ginger"
            />
            <FlexContainer direction="column" align="center">
              <img src={nootris} alt="no nootris" />
              <span className={styles.productFirstDescription}>
                + Бесплатная доставка
              </span>
              <span className={styles.productSecondDescription}>
                Специальная цена
              </span>
              <button className={styles.orderButton}>Оформить заказ!</button>
            </FlexContainer>
            <Card
              firsRow="Нейтрализует"
              secondRow="вирусы"
              src={virus}
              alt="no virus"
            />
          </FlexContainer>
        </FlexContainer>
      </Container>
    </section>
  );
};
