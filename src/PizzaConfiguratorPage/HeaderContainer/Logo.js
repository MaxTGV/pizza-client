import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.svg";
import title1 from "../../img/title1.svg";
import title2 from "../../img/title2.svg";

const StyledLogo = styled.div`
  width: 172px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: max-content;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img:first-child {
    margin: 0px 5px 0px 8px;
  }
  img: last-child {
    margin-top: 2px;
  }
`;

export const Logo = () => {
  return (
    <StyledLogo>
      <StyledLink to="/orderlist">
        <img src={logo} alt="alt" />
      </StyledLink>
      <Title>
        <img src={title1} alt="артем" />
        <img src={title2} alt="пицца" />
      </Title>
    </StyledLogo>
  );
};
