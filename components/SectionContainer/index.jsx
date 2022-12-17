import React from "react";
import styled, { css } from "styled-components";

const SectionContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default SectionContainer;

const Container = styled.div`
  width: 80%;

  ${({ padding }) =>
    padding &&
    css`
      padding: 2em 0 0 0;
    `}
`;
