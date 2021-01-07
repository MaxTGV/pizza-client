import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../shared/component/Form";
import styled from "styled-components";
import { Input } from "../shared/component/Input";
import { BaseButton } from "../shared/component/BaseButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddressForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 16px;
  width: 328px;
  height: auto;
  p {
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1f1f33;
    margin: 0;
  }
`;

const AddressDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 336px;
  height: auto;
  margin-top: 5px;
`;

const AddressOptions = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.fd ? "row" : "column")};
  align-items: flex-start;
  padding: 0px;
  width: ${(props) => props.w}px;
  height: auto;
  margin: 0px 8px 0px 0px;
  div {
    margin: 2px 0px 0px 0px;
  }
  p {
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b7c;
  }
  input {
    padding: 10.5px 0px 10.5px 14px;
  }
`;

const Line = styled.hr`
  width: 328px;
  height: 0px;
  border: ${(props) => (props.solid ? "solid" : "dashed")} #e1e1ed;
  border-width: 0px 0px 1px 0px;
  margin: 0px 0px 4px 0px;
`;

const TotalForm = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 16px;
  position: static;
  width: 328px;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
`;

const TotalFormGroup = styled.div`
  width: 328px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 4px 0px;
  p {
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #4b4b7c;
    height: 18px;
    margin: 0;
  }
`;

const StyledPayment = styled.p`
  position: absolute;
  width: 85px;
  text-align: right;
  top: 45px;
  left: 232px;
`;

const schema = yup.object().shape({
  address: yup.string().required("Введите адрес"),
  card_number: yup
    .string()
    .required("Введите номер карты")
    .min(16, "Некорректный номер карты"),
});

export const Payment = ({ postOrder, price }) => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [pay, setPay] = useState("");
  const disabled = watch("name");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    postOrder(data);
  });

  const paymentSystem = (value) => {
    switch (value) {
      case "4":
        return setPay("VISA");
      case "5":
        return setPay("MasterCard");
      default:
        return setPay("");
    }
  };

  const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

  const delivery = 180;

  return (
    <>
      <Form onSubmit={onSubmit}>
        <AddressForm>
          <p>Адрес доставки</p>
          <Input
            ref={register}
            name="address"
            type="text"
            placeholder="Введите адрес"
            error={!!errors.address}
            helperText={errors?.address?.message}
          />
          <AddressDetails>
            <AddressOptions w="104">
              <p>подъезд</p>
              <Input ref={register} name="entrance" type="text" />
            </AddressOptions>
            <AddressOptions w="104">
              <p>этаж</p>
              <Input ref={register} name="floor" type="text" />
            </AddressOptions>
            <AddressOptions w="104">
              <p>квартира</p>
              <Input ref={register} name="apartment" type="text" />
            </AddressOptions>
          </AddressDetails>
        </AddressForm>
        <AddressForm>
          <p>Данные для оплаты</p>
          <Input
            ref={register}
            name="card_number"
            id="card_number"
            type="text"
            placeholder="Номер карты"
            error={!!errors.card_number}
            helperText={errors?.card_number?.message}
            onChange={(event) => {
              const { value } = event.target;
              paymentSystem(value[0]);
              event.target.value = normalizeCardNumber(value);
            }}
          />
          {pay && <StyledPayment>{pay}</StyledPayment>}
          <AddressOptions w="328" fd>
            <Input
              ref={register}
              name="dateCard"
              type="text"
              placeholder="MM/YYYY"
            />
            <Input ref={register} name="cvv" type="password" placeholder="CVV" />
          </AddressOptions>
          <Input
            ref={register}
            name="name"
            type="text"
            placeholder="Имя как на карте"
          />
        </AddressForm>
        <TotalForm>
          <TotalFormGroup>
            <p>Стоимость заказа</p>
            <p>{`${price} руб`}</p>
          </TotalFormGroup>
          <TotalFormGroup>
            <p>Доставка</p>
            <p>{`${delivery} руб`}</p>
          </TotalFormGroup>
          <Line />
          <TotalFormGroup>
            <p>К оплате</p>
            <p>{`${price + delivery} руб`}</p>
          </TotalFormGroup>
          <BaseButton disabled={!disabled}>{`Оплатить ${
            price + delivery
          } руб`}</BaseButton>
        </TotalForm>
      </Form>
    </>
  );
};
