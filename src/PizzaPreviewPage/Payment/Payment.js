import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../shared/component/Form";
import styled from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentForm } from "./PaymentForm";
import { TotalOrderForm } from "./TotalOrderForm";
import { Line } from "../../shared/component/Line";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Message = styled.p`
  line-height: 20px;
  color: #4b4b7c;
  margin: 0px 0px 160px 16px;
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
  const [disabled, setDisabled] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const filledForm = watch("name");
  useEffect(() => {
    setDisabled(filledForm);
  }, [filledForm]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    postOrder(data);
  });

  return (
    <>
      <Form onSubmit={onSubmit}>
        <AddressForm ref={register} errors={errors}/>
        <Line solid />
        <PaymentForm ref={register} errors={errors} setDisabled={setDisabled} />
        <Line solid />
        <Message>
          Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
          не бросает.
        </Message>
        <TotalOrderForm price={price} disabled={disabled} />
      </Form>
    </>
  );
};
