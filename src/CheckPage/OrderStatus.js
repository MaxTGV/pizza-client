import React from "react";
import styled from "styled-components";
import success from "../img/success.svg";

const StyledOrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
  margin: 32px 0px;
  width: 328px;
  height: auto;
  background-color: white;
  img {
    width: 51px;
    height: 51px;
    margin: 0px 0px 24px 0px;
  }
`;

const StatusTitle = styled.h3`
  width: 248px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1f1f33;
  margin: 8px 0px;
`;

const StatusDescription = styled.p`
  width: 248px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4b4b7c;
  margin: 8px 0px;
`;

export const OrderStatus = () => {
  return (
    <StyledOrderStatus>
      <img src={success} alt="success" />
      <StatusTitle>
        Спасибо за заказ!
      </StatusTitle>
      <StatusDescription>
        Заказ успешно оплачен, ждите вашу пиццу уже через час
      </StatusDescription>
    </StyledOrderStatus>
  );
};
