import React, { forwardRef, useState } from "react";
import { Input } from "../../shared/component/Input";
import { StyledPaymentForm, StyledPayment, CardAttribute } from "../style";
import {
  normalizeCardNumber,
  normalizeDateCard,
  normalizeCVV,
} from "./normalizeFunctions";

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
    <StyledPaymentForm className="paymentForm">
      <h3>Данные для оплаты</h3>
      {pay && <StyledPayment className="paymentSystem" payment={pay} />}
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
