import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 460px) {
    width: 55%;
    justify-content: space-between;
  }
  & h3 {
    width: max-content;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
    width: max-content;
    margin-left: 5px;
  }
  & p {
    display: none;
    overflow: hidden;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b7c;
    margin: 0px 8px;
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  p {
    display: none;
    overflow: hidden;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b7c;
    margin: 0px 8px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;