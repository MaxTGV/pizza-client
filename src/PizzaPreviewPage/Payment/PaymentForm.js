import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { Input } from "../../shared/component/Input";
import visa from "../../img/visa.svg";
import mastercard from "../../img/mastercard.svg";
import {
  normalizeCardNumber,
  normalizeDateCard,
  normalizeCVV,
} from "./normalizeFunctions";

const StyledPaymentForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 16px 0px 16px;
  width: 328px;
  height: auto;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1f1f33;
    margin-bottom: 16px;
  }
`;

const StyledPayment = styled.div`
  position: absolute;
  background: no-repeat center/60%
    url(${({ payment }) => (payment === "visa" ? visa : mastercard)});
  width: 85px;
  height: 40px;
  top: 40px;
  left: 245px;
  z-index: 1;
`;

const CardAttribute = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 328px;
  height: auto;
  & div:first-child {
    width: 104px;
    margin: 16px 0px;
  }
  & div:last-child {
    width: 64px;
    margin: 16px 0px;
  }
`;

export const PaymentForm = forwardRef(({ errors }, ref) => {
  const [pay, setPay] = useState("");

  const paymentSystem = (value) => {
    switch (value) {
      case "4":
        return setPay("visa");
      case "5":
        return setPay("mastercard");
      default:
        return setPay("");
    }
  };

  return (
    <StyledPaymentForm>
      <h3>Данные для оплаты</h3>
      {pay && <StyledPayment payment={pay} />}
      <Input
        ref={ref}
        name="card_number"
        id="card_number"
        type="text"
        placeholder="Номер карты"
        onChange={(event) => {
          const { value } = event.target;
          paymentSystem(value[0]);
          event.target.value = normalizeCardNumber(value);
        }}
        error={!!errors.card_number}
        helperText={errors?.card_number?.message}
      />
      <CardAttribute>
        <div>
          <Input
            ref={ref}
            name="dateCard"
            type="text"
            placeholder="MM/YYYY"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeDateCard(value);
            }}
            error={!!errors.dateCard}
            helperText={errors?.dateCard?.message}
          />
        </div>
        <div>
          <Input
            ref={ref}
            name="cvv"
            type="password"
            placeholder="CVV"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCVV(value);
            }}
            error={!!errors.cvv}
            helperText={errors?.cvv?.message}
          />
        </div>
      </CardAttribute>
      <Input
        ref={ref}
        name="name"
        type="text"
        placeholder="Имя как на карте"
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
    </StyledPaymentForm>
  );
});
