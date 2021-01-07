import React from "react";
import { Navbar } from "../shared/component/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import close from "../img/close.png";
import success from "../img/success.png";
import exclude from "../img/Exclude.png";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";

const StyledLink = styled(Link)`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const OrderStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 328px;
  height: auto;
`;

const OrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;
  margin-bottom: 16px;
  width: 328px;
  height: auto;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
`;

const StatusText = styled.p`
  width: 248px;
  height: 40px;
  margin: 0;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  margin-top: ${(props) => (props.mt ? props.mt : "0")}px;
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fz}px;
  line-height: ${(props) => props.lh}px;
  text-align: center;
  color: ${(props) => (props.color ? "#4B4B7C" : "#1F1F33")};
`;

const OrderItem = styled.div`
  width: 328px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
`;

const OrderInfo = styled.div`
  width: 281px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 4px 16px;
`;

const OrderTitle = styled.p`
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin: 0;
  padding: 4px 16px;
`;

const OrderDescription = styled.p`
  width: ${(props) => props.w}px;
  height: auto;
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 8px 0px;
  padding: 0px ${(props) => props.padding}px;
`;

const Line = styled.hr`
  width: 296px;
  height: 0px;
  border: dashed #e1e1ed;
  border-width: 0px 0px 1px 0px;
  margin: 0px 16px;
`;

const OrderDetails = styled.div`
  width: 296px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0px;
  span {
    font-family: M PLUS Rounded 1c ExtraBold;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #f3752b;
  }
`;

const OrderPrice = styled.p`
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 0;
  padding: 13px 16px;
`;

export const Check = ({ pizza, cheeses, vegs, meats }) => {
  const { size, dough, sauces, cheese, vegetables, meat, price } = pizza;
  const delivery = 180;

  const toppingsDescription = () => {
    const nameToppings = [...cheese, ...vegetables, ...meat].reduce(
      (name, topping) => {
        const toppingData = [...cheeses, ...vegs, ...meats].find(
          (t) => t.slug === topping
        );
        return `${name} \u00b7 ${toppingData.name}`;
      },
      ""
    );
    return nameToppings;
  };

  const orderDate = () => {
    const now = new Date();
    const day = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const newDate = `${day} января ${year}, ${hour}:${minute}`;
    return newDate;
  };

  return (
    <>
      <Navbar jc="flex-end">
        <StyledLink to="/">
          <img src={close} alt="alt" />
        </StyledLink>
      </Navbar>
      <OrderStatusContainer>
        <OrderStatus>
          <img src={success} alt="alt" />
          <StatusText fw="500" fz="20" lh="28" mt="24">
            Спасибо за заказ!
          </StatusText>
          <StatusText fw="400" fz="16" lh="20" color>
            Заказ успешно оплачен, ждите вашу пиццу уже через час
          </StatusText>
        </OrderStatus>
        <OrderItem>
          <OrderInfo>
            <OrderDescription w="65" padding="0">{`Заказ ${Math.floor(
              Math.random() * 10000
            )}`}</OrderDescription>
            <OrderDescription
              w="200"
              padding="0"
            >{`${orderDate()} \u00b7 В работе`}</OrderDescription>
          </OrderInfo>
          <OrderTitle>Ленивая Маргарита</OrderTitle>
          <OrderDescription w="296" padding="16">
            {`${SIZE[size].name} см на ${DOUGH[dough].name
              .slice(0, -2)
              .toLowerCase()}ом  тесте \u00b7 ${
              SAUCE[sauces].name
            } соус ${toppingsDescription()}`}
          </OrderDescription>
          <Line />
          <OrderDetails>
            <OrderPrice>{`${
              price + delivery
            } руб \u00b7 оплата МС *4444`}</OrderPrice>
            <img src={exclude} alt="alt" />
            <span>Доставляется</span>
          </OrderDetails>
        </OrderItem>
      </OrderStatusContainer>
    </>
  );
};
