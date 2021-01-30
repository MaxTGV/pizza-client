import React, { forwardRef } from "react";
import styled from "styled-components";
import check from "../img/check.svg";

const server = process.env.REACT_APP_BACKEND_URL;

const ToppingsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  height: auto;
  background: white;
`;

const ToppingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px 8px 4px 0px;
  width: 104px;
  height: 135px;
  background: white;
  box-shadow: ${(props) =>
    props.border ? "none" : "0px 8px 16px rgba(75, 75, 124, 0.05)"};
  border-radius: 12px;
  border: ${(props) =>
    props.border ? "2px solid #00A896" : "2px solid transparent"};
  transition: all 0.2ms ease-out;

  & label {
    width: 104px;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & label span:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    border: 2px solid #e1e1ed;
    border-radius: 4px;
    left: 60px;
    top: 0;
  }

  & label input:checked + span:before {
    background: #00a896 url(${check}) 1.5px 3px no-repeat;
    text-align: center;
    width: 20px;
    height: 20px;
    border: 2px solid #00a896;
    transition: all 0.15s ease-in;
  }

  &:hover {
    cursor: pointer;
    box-shadow: ${(props) =>
      props.border ? "none" : "0px 10px 20px rgba(75, 75, 124, 0.2)"};
  }

  p {
    margin: 5px 0px 0px 0px;
    padding-bottom: 4px;
    font-weight: ${(props) => (props.border ? "500" : "normal")};
    line-height: 20px;
    color: #1f1f33;
    width: 80px;
    height: 20px;
  }
`;

const ToppingAsset = styled.div`
  width: 80px;
  height: 95px;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  img {
    height: 65px;
    width: 65px;
  }
`;

const FormTopping = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: space-between;
  width: 80px;

  input {
    display: none;
  }

  span {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1f1f33;
    padding-bottom: 3px;
  }
`;

export const Toppings = forwardRef(({ topping, checked, ...props }, ref) => {
  const isChecked = (value) => {
    return checked.includes(value);
  };

  return (
    <ToppingsList>
      {topping.map((item) => (
        <ToppingItem key={item.id} border={isChecked(item.slug)}>
          <label htmlFor={item.slug}>
            <ToppingAsset>
              <img
                src={`${server}/${item.thumbnail}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </ToppingAsset>
            <FormTopping>
              <input
                type="checkbox"
                id={item.slug}
                value={item.slug}
                name={item.category}
                ref={ref}
                {...props}
              />
              <span>{item.price} ₽</span>
            </FormTopping>
          </label>
        </ToppingItem>
      ))}
    </ToppingsList>
  );
});
