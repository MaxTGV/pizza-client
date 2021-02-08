import React from "react";
import { Line } from "../../shared/component/Line";
import { StyledOrderCard, OrderTitle } from "../style";
import { OrderDescription } from "./OrderDescription";
import { OrderDetails } from "./OrderDetails";
import { OrderInfo } from "./OrderInfo";



export const OrderCard = ({ orderData, toppingsData }) => {
  const { price } = orderData;
  return (
    <StyledOrderCard className="orderCard">
      <OrderInfo />
      <OrderTitle>Ленивая Маргарита</OrderTitle>
      <OrderDescription orderData={orderData} toppingsData={toppingsData} />
      <Line width/>
      <OrderDetails price={price} />
    </StyledOrderCard>
  );
};
