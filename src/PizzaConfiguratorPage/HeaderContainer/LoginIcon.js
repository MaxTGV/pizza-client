import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import account from "../../img/account.svg";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const LoginIcon = () => {
  return (
    <StyledLink to="/login">
      <img src={account} alt="alt" />
    </StyledLink>
  );
};
