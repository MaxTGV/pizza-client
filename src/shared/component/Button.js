import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: rgba(0, 168, 150, 1);
  border-radius: 16px;
  color: white;
  font-weight: 800;
  font-size: 16px;
  text-transform: none;
  &:hover {
    background-color: #009485;
    color: white;
    box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05), 0px 0px 2px rgba(75, 75, 124, 0.2);
  }
  &:active {
    background: #009485;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    background-color: rgba(249, 249, 251, 1);
    color: #8181b1;
    opacity: 0.5;
  }
`;

export const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledButton type="submit" innerRef={ref} {...props}>
      {children}
    </StyledButton>
  );
});
