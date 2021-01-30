import React from "react";
import styled from "styled-components";
import { OrderDescription } from "./OrderDescription";

const StyledOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 328px;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  margin: 16px 16px 0px 16px;
`;

const OrderTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin-bottom: 8px;
`;

const Line = styled.hr`
  width: 296px;
  height: 0px;
  border: dashed #e1e1ed;
  border-width: 0px 0px 1px 0px;
  margin: 16px 0px;
`;

const OrderPrice = styled.p`
  font-weight: 800;
  line-height: 20px;
  color: #1F1F33;
`;

export const OrderCard = ({ orderData, toppingsData }) => {
  return (
    <StyledOrderCard>
      <OrderTitle>Ленивая Маргарита</OrderTitle>
      <OrderDescription orderData={orderData} toppingsData={toppingsData} />
      <Line />
      <OrderPrice>{`${orderData.price} руб`}</OrderPrice>
    </StyledOrderCard>
  );
};
