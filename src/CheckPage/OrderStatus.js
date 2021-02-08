import React from "react";
import success from "../img/success.svg";
import { StyledOrderStatus, StatusTitle, StatusDescription } from "./style";

export const OrderStatus = () => {
  return (
    <StyledOrderStatus>
      <img src={success} alt="success" />
      <StatusTitle>Спасибо за заказ!</StatusTitle>
      <StatusDescription>
        Заказ успешно оплачен, ждите вашу пиццу уже через час
      </StatusDescription>
    </StyledOrderStatus>
  );
};
