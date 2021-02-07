import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => props.mb ? '55px' : '0px'};
  h1 {display: none};
`;

export const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};
