import React from "react";
import { StyledOrderCard, OrderTitle, Line, OrderPrice } from "../style";
import { OrderDescription } from "./OrderDescription";

export const OrderCard = ({ orderData, toppingsData }) => {
  return (
    <StyledOrderCard className="orderCard">
      <OrderTitle>Ленивая Маргарита</OrderTitle>
      <OrderDescription orderData={orderData} toppingsData={toppingsData} />
      <Line />
      <OrderPrice>{`${orderData.price} руб`}</OrderPrice>
    </StyledOrderCard>
  );
};
