import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import account from "../../img/account.svg";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  div {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    p {
      overflow: hidden;
      display: none;
      width: 95px;
      font-weight: 800;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b7c;
      margin: 0px 8px;
    }
  }
`;

export const LoginIcon = () => {
  return (
    <StyledLink to="/login">
      <div>
        <img src={account} alt="alt" />
        <p>Мои заказы</p>
      </div>
    </StyledLink>
  );
};
