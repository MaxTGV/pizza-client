import React from "react";
import exclude from "../../img/Exclude.svg";
import mastercard from "../../img/mastercard.svg";
import {
  StyledOrderDetails,
  OrderCardNumber,
  OrderPrice,
  OrderDelivery,
} from "../style";

export const OrderDetails = ({ price }) => {
  const delivery = 180;
  return (
    <StyledOrderDetails>
      <OrderCardNumber>
        <OrderPrice>{`${price + delivery} руб`}</OrderPrice>
        <img src={mastercard} alt="mastercard" />
        <p>{`2345`}</p>
      </OrderCardNumber>
      <OrderDelivery>
        <img src={exclude} alt="exclude" />
        <p>Доставляется</p>
      </OrderDelivery>
    </StyledOrderDetails>
  );
};
