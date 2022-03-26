import React from "react";
import styled, { css } from "styled-components";

const Box = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Box;

const Container = styled.div`
  position: relative;
  min-height: ${(props) => props.height || "100vh"};
  height: 100vh;
  background-color: ${(props) =>
    props?.color?.length > 0 ? props.color : "transperent"};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent || "unset"};
    `}
      ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems || "unset"};
    `}
   


  h1 {
    font-size: 3.375rem;
  }
`;
