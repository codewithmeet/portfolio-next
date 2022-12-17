import React from "react";
import styled from "styled-components";
import getWidthString from "../../utils/getWidthString";

const Column = ({ children, ...props }) => {
  return <AppColumn {...props}>{children}</AppColumn>;
};

export default Column;

const AppColumn = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;
