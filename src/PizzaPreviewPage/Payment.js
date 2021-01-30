import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../shared/component/Form";
import styled from "styled-components";
import { Input } from "../shared/component/Input";
import { BaseButton } from "../shared/component/BaseButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import visa from "../img/visa.png";
import mastercard from "../img/mastercard.png";

const AddressForm = styled.div`
  font-family: "Rounded Mplus 1c";
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 16px 8px 16px;
  width: 328px;
  height: auto;
  p {
    font-family: "Rounded Mplus 1c";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1f1f33;
    margin: 0;
  }
  div {
    p {
      font-size: 14px;
      letter-spacing: normal;
      line-height: inherit;
    }
  }
`;

const AddressDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0px;
  width: 336px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 8px;
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
    p {
      font-size: 10px;
      letter-spacing: normal;
      line-height: inherit;
    }
  }
  p {
    font-family: "Rounded Mplus 1c";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

const CardAttribute = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 0px;
  width: 328px;
  height: auto;
  margin: 0px 8px 0px 0px;
  & .MuiFormControl-fullWidth:first-child {
    width: 104px;
  }
  & .MuiFormControl-fullWidth:last-child {
    width: 64px;
  }
  div p {
    font-size: 10px;
    letter-spacing: normal;
    line-height: inherit;
    font-weight: normal;
  }
`;

const Line = styled.hr`
  width: 328px;
  height: 0px;
  border: ${(props) => (props.solid ? "solid" : "dashed")} #e1e1ed;
  border-width: 0px 0px 1px 0px;
  margin: 0px 0px 4px ${(props) => props.ml || 0}px;
`;

const Message = styled.p`
  font-family: "Rounded Mplus 1c";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #4b4b7c;
  margin: 16px;
`;

const TotalForm = styled.div`
  position: fixed;
  top: 496px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
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
  &:nth-child(4) {
    margin-bottom: 14px;
    p {
      font-weight: 500;
    }
  }
  p {
    font-family: "Rounded Mplus 1c";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #4b4b7c;
    height: 18px;
    margin: 0;
  }
`;

const StyledPayment = styled.div`
  position: absolute;
  background: no-repeat center/60%
    url(${(props) => (props.payment === "VISA" ? visa : mastercard)});
  width: 85px;
  height: 40px;
  top: 38px;
  left: 246px;
  z-index: 1;
`;

const numericRegex = /(?=.*[0-9])/;

const schema = yup.object().shape({
  address: yup.string().required("Введите адрес"),
  entrance: yup
    .string()
    .required("Введите номер подъезда")
    .matches(numericRegex, "Только цифры"),
  floor: yup
    .string()
    .required("Введите этаж")
    .matches(numericRegex, "Только цифры"),
  apartment: yup
    .string()
    .required("Введите номер квартиры")
    .matches(numericRegex, "Только цифры"),
  card_number: yup
    .string()
    .required("Введите номер карты")
    .matches(numericRegex, "Только цифры")
    .min(16, "Некорректный номер карты"),
  dateCard: yup.string().required("Введите дату окончания карты"),
  cvv: yup
    .string()
    .required("Введите код CVV")
    .max(3, "Некорректный номер CVV"),
  name: yup.string().required("Введите имя держателя карты"),
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

  const normalizeDateCard = (value) => {
    return value.replace(/(\d{2})+(\d{4})/, "$1/$2")?.substr(0, 7) || "";
  };

  const normalizeCVV = (value) => {
    return value.substr(0, 3) || "";
  };

  const delivery = 180;

  return (
    <>
      <Form onSubmit={onSubmit} pb="18">
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
              <Input
                ref={register}
                name="entrance"
                type="text"
                error={!!errors.entrance}
                helperText={errors?.entrance?.message}
              />
            </AddressOptions>
            <AddressOptions w="104">
              <p>этаж</p>
              <Input
                ref={register}
                name="floor"
                type="text"
                error={!!errors.floor}
                helperText={errors?.floor?.message}
              />
            </AddressOptions>
            <AddressOptions w="104">
              <p>квартира</p>
              <Input
                ref={register}
                name="apartment"
                type="text"
                error={!!errors.apartment}
                helperText={errors?.apartment?.message}
              />
            </AddressOptions>
          </AddressDetails>
        </AddressForm>
        <Line solid ml="16" />
        <AddressForm>
          <p>Данные для оплаты</p>
          {pay && <StyledPayment payment={pay} />}
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
          <CardAttribute>
            <Input
              ref={register}
              name="dateCard"
              type="text"
              placeholder="MM/YYYY"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value =  normalizeDateCard(value);
              }}
              error={!!errors.dateCard}
              helperText={errors?.dateCard?.message}
            />
            <Input
              ref={register}
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
          </CardAttribute>
          <Input
            ref={register}
            name="name"
            type="text"
            placeholder="Имя как на карте"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        </AddressForm>
        <Line solid ml="16" />
        <Message>
          Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
          не бросает.
        </Message>
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
