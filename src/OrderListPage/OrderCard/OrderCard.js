import React from "react";
import styled from "styled-components";
import { Line } from "../../shared/component/Line";
import { OrderDescription } from "./OrderDescription";
import { OrderDetails } from "./OrderDetails";
import { OrderInfo } from "./OrderInfo";

const StyledOrderCard = styled.div`
  width: 328px;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  margin: 32px 16px;
`;

const OrderTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin-bottom: 4px;
`;

export const OrderCard = ({ order, id }) => {
  const { price, payment, card_number } = order;
  return (
    <StyledOrderCard>
      <OrderInfo />
      <OrderTitle>Ленивая Маргарита</OrderTitle>
      <OrderDescription order={order}/>
      <Line width/>
      <OrderDetails price={price} payment={payment} id={id} card={card_number} />
    </StyledOrderCard>
  );
};
