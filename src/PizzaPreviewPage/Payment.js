import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Payment = ({postOrder}) => {
  const { register, handleSubmit, errors } = useForm();
  const [pay, setPay] = useState("");

  const onSubmit = handleSubmit((data) => {
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

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Адрес доставки</legend>
          <label>
            <input
              ref={register}
              name="address"
              type="text"
              placeholder="Введите адрес"
            />
          </label>
          <label>
            Подъезд
            <input ref={register} name="entrance" type="text" />
          </label>
          <label>
            Этаж
            <input ref={register} name="floor" type="text" />
          </label>
          <label>
            Квартира
            <input ref={register} name="apartment" type="text" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Данные для оплаты</legend>
          <label>
            <input
              ref={register({
                pattern: {
                  value: /^[0-9]/i,
                  message: "Только цифры!",
                },
              })}
              name="card_number"
              type="text"
              placeholder="0000 0000 0000 0000"
              onChange={(event) => {
                const { value } = event.target;
                paymentSystem(value[0]);
                event.target.value = normalizeCardNumber(value);
              }}
            />
          </label>
          <label>
            <input
              ref={register}
              name="dateCard"
              type="text"
              placeholder="MM/YYYY"
            />
          </label>
          <label>
            <input ref={register} name="cvv" type="text" placeholder="CVV" />
          </label>
          <label>
            <input
              ref={register}
              name="name"
              type="text"
              placeholder="Имя как на карте"
            />
          </label>
          {pay && <p>{pay}</p>}
          {errors.numberCard && <p>{errors.numberCard.message}</p>}
        </fieldset>
        <button>Заказать</button>
      </form>
    </>
  );
};
