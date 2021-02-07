import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const StyledHeader = styled(Container)`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
  box-shadow: 0px 3px 4px rgba(46, 49, 55, 0.05), 0px 0px 2px rgba(46, 49, 55, 0.15);
  @media (min-width: 460px) {
    a div p, div a p, div p {
      display: block;
    }
  }
`;

export const Header = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};
