import styled from "styled-components";
import { Container } from "../shared/component/Container";

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px 32px;
    > div {
      width: 350px;
      margin: 32px 0px;
      p:last-child {
        line-height: 20px;
      }
      h1 {
        display: none;
      }
      & .assets,
      .plateAsset {
        width: inherit;
        height: 320px;
      }
      & .doughAsset {
        left: 25px;
        top: 25px;
        width: 270px;
      }
      & .toppingAsset {
        left: 35px;
        top: 30px;
        width: 250px;
      }
    }
    form {
      width: 500px;
      height: 668px;
      margin: 32px 16px 32px 32px;
      overflow-y: scroll;
      align-items: flex-start;
      &::-webkit-scrollbar {
        width: 0;
      }
      > div {
          flex-wrap: wrap;
          div {margin-bottom: 5px;}
      }
      & h1 {
        margin: 0px 0px 24px 16px;
        font-weight: 800;
        font-size: 28px;
        line-height: 36px;
        display: block;
      }
      & .saucesRadioContainer {
        overflow: hidden;
        height: max-content;
        width: 80%;
        & div {
          flex-wrap: wrap;
          height: max-content;
          width: 100%;
          background: white;
          & label {
            margin:0px 7px 8px 0px;
            border: 2px solid #e1e1ed;
            border-radius: 12px;
            line-height: 20px;
          }
          & input:checked + label {
            border: 2px solid #00a896;
            box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
              0px 0px 2px rgba(75, 75, 124, 0.2);
          }
        }
      }
      & .cheeseToppingsContainer {
        flex-wrap: wrap;
        width: 100%;
        height: max-content;
      }
      & .scrollToppingsContainer {
        overflow: hidden;
        height: max-content;
        width: 100%;
        & >div {
          flex-wrap: wrap;
          height: max-content;
          width: 100%;
        }
      }

      & .buttonContainer {
        width: 253px;
        top: 519px;
        left: 385px;
        box-shadow: none;
        position: absolute;
      }
    }
  }

  @media (min-width: 820px) {
    form .buttonContainer {
        width: 253px;
        top: 519px;
        left: 512px;
        box-shadow: none;
        position: absolute;
      }
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px 32px;
    > div {
      width: 350px;
      margin: 32px 32px 32px 16px;
      p:last-child {
        line-height: 20px;
      }
      h1 {
        display: none;
      }
      & .assets,
      .plateAsset {
        width: inherit;
        height: 320px;
      }
      & .doughAsset {
        left: 25px;
        top: 25px;
        width: 270px;
      }
      & .toppingAsset {
        left: 35px;
        top: 30px;
        width: 250px;
      }
    }
    form {
      width: 500px;
      height: 668px;
      margin: 32px 16px 32px 32px;
      overflow-y: scroll;
      align-items: flex-start;
      &::-webkit-scrollbar {
        width: 0;
      }
      & h1 {
        margin: 0px 0px 24px 16px;
        font-weight: 800;
        font-size: 28px;
        line-height: 36px;
        display: block;
      }
      & .saucesRadioContainer {
        overflow: hidden;
        height: max-content;
        width: 80%;
        & div {
          flex-wrap: wrap;
          height: max-content;
          width: 100%;
          background: white;
          & label {
            margin:0px 7px 8px 0px;
            border: 2px solid #e1e1ed;
            border-radius: 12px;
            line-height: 20px;
          }
          & input:checked + label {
            border: 2px solid #00a896;
            box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
              0px 0px 2px rgba(75, 75, 124, 0.2);
          }
        }
      }
      & .cheeseToppingsContainer {
        flex-wrap: wrap;
        width: 100%;
        height: max-content;
      }
      & .scrollToppingsContainer {
        overflow: hidden;
        height: max-content;
        width: 100%;
        & >div {
          flex-wrap: wrap;
          height: max-content;
          width: 100%;
        }
      }
      & .buttonContainer {
        width: 253px;
        top: 519px;
        left: 604px;
        box-shadow: none;
        position: absolute;
      }
    }
  }
`;

export const StandartSetContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 14px;
  margin: 12px 0px;
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 156px;
  height: 56px;
  overflow: hidden;
  h3 {
    padding-bottom: 4px;
    font-weight: 500;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

export const SaucesContainer = styled(StandartSetContainer)`
  flex-direction: column;
  h3 {
    padding-bottom: 4px;
    font-weight: 500;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

export const SaucesRadioContainer = styled.div`
  height: 35px;
  overflow-x: scroll;
  width: 328px;
`;

export const ToppingsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 14px;
  margin: 12px 0px;
  h3 {
    padding-bottom: 4px;
    font-weight: 500;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

export const ScrollToppingsContainer = styled.div`
  width: 328px;
  height: auto;
  overflow-x: scroll;
  scrollbar-width: thin;
`;

export const ButtonContainer = styled(Container)`
  margin: 0 auto;
  position: fixed;
  top: 576px;
  width: 100%;
`;