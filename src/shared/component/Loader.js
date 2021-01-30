import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const LoaderList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li:nth-child(1) {
    animation-delay: -1s;
    background: rgba(0, 168, 150, 1);
    box-shadow: 0 0 50px rgba(0, 168, 150, 1);
  }

  li:nth-child(2) {
    animation-delay: -0.8s;
    background: rgba(0, 168, 150, 1);
    box-shadow: 0 0 50px rgba(0, 168, 150, 1);
  }

  li:nth-child(3) {
    animation-delay: -0.6s;
    background: rgba(0, 168, 150, 1);
    box-shadow: 0 0 50px rgba(0, 168, 150, 1);
  }
`;

const LoaderItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: glow 2s ease-in-out infinite;
`;

export const Loader = () => {
  return (
    <StyledLoader>
      <LoaderList>
        <LoaderItem />
        <LoaderItem />
        <LoaderItem />
      </LoaderList>
    </StyledLoader>
  );
};
