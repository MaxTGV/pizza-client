import React from "react";
import { generateNewDate } from "../../shared/generateNewDate";
import { StyledOrderInfo, OrderNumber, OrderDate } from "../style";

export const OrderInfo = () => {
  return (
    <StyledOrderInfo>
      <OrderNumber>{`Заказ ${Math.floor(Math.random() * 10000)}`}</OrderNumber>
      <OrderDate>{`${generateNewDate()} \u00b7 В работе`}</OrderDate>
    </StyledOrderInfo>
  );
};
