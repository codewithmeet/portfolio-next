import React from "react";
import styled from "styled-components";

const Row = ({ children }) => {
  return <AppRow>{children}</AppRow>;
};

export default Row;

const AppRow = styled.div`
  width: 80%;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;
