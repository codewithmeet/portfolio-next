import React from "react";
import styled, { css } from "styled-components";

const Box = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Box;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 90px);
  padding: 90px 0 0 0;
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
 @media (max-width: 1080px) {
    padding: 150px 0 0 0;
  }
  @media (max-width: 768px) {
    padding: 125px 0 0 0;
  }
  @media (max-width: 480px) {
    padding: 100px 0 0 0;
  }
`;
