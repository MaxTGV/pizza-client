import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const StyledContainer = styled(Container)`
  width: 328px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;

  button {
      margin-top: 16px;
  }
`;

export const FormContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
