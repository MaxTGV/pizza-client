import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #4b4b7c;
  margin: 8px 0px;
`;

const StyledInput = styled.input`
  width: ${({ label }) => (label ? "296px" : "inherit")};
  height: 48px;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px;
  font-size: 16px;
  line-height: 24px;
  color: #1F1F33;

  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #8181b1;
  }

  &:hover {
    border: 2px solid #8181b1;
  }

  &:focus {
    border: 2px solid #00a896;
  }

  &:invalid {
    border: 2px solid #e3170a;
    color: #e3170a;
  }
`;

const Error = styled.p`
  line-height: 20px;
  color: #e3170a;
  margin: 4px 0px;
`;

export const Input = forwardRef((props, ref) => {
  return (
    <>
      {props.label && (
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      )}
      <StyledInput type="text" ref={ref} {...props} />
      {props.error && <Error>{props.helperText}</Error>}
    </>
  );
});
