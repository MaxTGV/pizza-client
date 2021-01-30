import React from "react";
import styled from "styled-components";
import { generateNewDate } from "../../shared/generateNewDate";

const StyledOrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 296px;
  margin-bottom: 16px;
`;

const OrderNumber = styled.p`
  width: 65px;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin-right: 16px;
`;

const OrderDate = styled.p`
  width: 215px;
  font-size: 12px;
  line-height: 18px;
  color: #8181b1;
`;

export const OrderInfo = () => {
  return (
    <StyledOrderInfo>
      <OrderNumber>{`Заказ ${Math.floor(Math.random() * 10000)}`}</OrderNumber>
      <OrderDate>{`${generateNewDate()} \u00b7 В работе`}</OrderDate>
    </StyledOrderInfo>
  );
};
