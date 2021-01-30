import React from "react";
import styled from "styled-components";
import exclude from "../../img/Exclude.svg";

const StyledOrderDetails = styled.div`
  width: 305px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OrderPrice = styled.p`
  font-weight: 800;
  line-height: 20px;
`;

const OrderCardNumber = styled.div`
  display: flex;
  flex-direction: row;
  p {
    line-height: 20px;
    color: #1f1f33;
  }
`;

const OrderDelivery = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 16px;
  p {
    font-weight: 500;
    line-height: 20px;
    color: #f3752b;
    margin-left: 8px;
  }
`;

export const OrderDetails = ({ price, payment, card, id }) => {
  const delivery = 180;
  return (
    <StyledOrderDetails>
      <OrderPrice>{`${+price + delivery} руб`}</OrderPrice>
      <OrderCardNumber>
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
