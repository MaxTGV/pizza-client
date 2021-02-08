import React from "react";
import { Line } from "../../shared/component/Line";
import { Button } from "../../shared/component/Button";
import { StyledTotalOrderForm, TotalFormGroup } from "../style";

export const TotalOrderForm = ({ price, disabled }) => {
  const delivery = 180;

  return (
    <StyledTotalOrderForm className="totalOrderForm">
      <TotalFormGroup>
        <p>Стоимость заказа</p>
        <p>{`${price} руб`}</p>
      </TotalFormGroup>
      <TotalFormGroup>
        <p>Доставка</p>
        <p>{`${delivery} руб`}</p>
      </TotalFormGroup>
      <Line margin />
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
