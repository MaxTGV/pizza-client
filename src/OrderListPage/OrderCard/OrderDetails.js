import React from "react";
import exclude from "../../img/Exclude.svg";
import {
  StyledOrderDetails,
  OrderCardNumber,
  OrderPrice,
  OrderDelivery,
} from "../style";

export const OrderDetails = ({ price, payment, card, id }) => {
  const delivery = 180;
  return (
    <StyledOrderDetails>
      <OrderCardNumber>
        <OrderPrice>{`${+price + delivery} руб`}</OrderPrice>
        {payment !== "default" && (
          <img
            src={require(`../../img/${payment}.svg`).default}
            alt="payment"
          />
        )}
        <p>{card.substring(card.length - 4)}</p>
      </OrderCardNumber>
      <OrderDelivery>
        <img src={exclude} alt="exclude" />
        <p>Доставляется</p>
      </OrderDelivery>
    </StyledOrderDetails>
  );
};
