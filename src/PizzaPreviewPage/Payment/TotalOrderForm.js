import React from "react";
import styled from "styled-components";
import { Line } from "../../shared/component/Line";
import { Button } from "../../shared/component/Button";

const StyledTotalOrderForm = styled.div`
  position: fixed;
  top: 496px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: 360px;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
`;

const TotalFormGroup = styled.div`
  width: 328px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:nth-child(4) {
    margin-bottom: 14px;
    p {
      font-weight: 500;
    }
  }
  p {
    font-size: 12px;
    line-height: 18px;
    color: #4b4b7c;
    height: 18px;
  }
`;

export const TotalOrderForm = ({ price, disabled }) => {
  const delivery = 180;

  return (
    <StyledTotalOrderForm>
      <TotalFormGroup>
        <p>Стоимость заказа</p>
        <p>{`${price} руб`}</p>
      </TotalFormGroup>
      <TotalFormGroup>
        <p>Доставка</p>
        <p>{`${delivery} руб`}</p>
      </TotalFormGroup>
      <Line margin/>
      <TotalFormGroup>
        <p>К оплате</p>
        <p>{`${price + delivery} руб`}</p>
      </TotalFormGroup>
      <Button disabled={!disabled}>
        {!disabled
          ? `Заполните форму заказа`
          : `Оплатить ${price + delivery} руб`}
      </Button>
    </StyledTotalOrderForm>
  );
};