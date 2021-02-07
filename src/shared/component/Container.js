import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  background-color: #ffffff;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
`;

export const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
