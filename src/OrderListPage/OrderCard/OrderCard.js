import React from "react";
import { Line } from "../../shared/component/Line";
import { StyledOrderCard, OrderTitle } from "../style";
import { OrderDescription } from "./OrderDescription";
import { OrderDetails } from "./OrderDetails";
import { OrderInfo } from "./OrderInfo";

export const OrderCard = ({ order, id }) => {
  const { price, payment, card_number } = order;
  return (
    <StyledOrderCard className="orderCard">
      <OrderInfo />
      <OrderTitle>Ленивая Маргарита</OrderTitle>
      <OrderDescription order={order} />
      <Line width="100%" />
      <OrderDetails
        price={price}
        payment={payment}
        id={id}
        card={card_number}
      />
    </StyledOrderCard>
  );
};
