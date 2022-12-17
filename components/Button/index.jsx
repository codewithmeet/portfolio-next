import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Button = ({ children, ...props }) => {
  return (
    <AppBtn {...props}>
      {props.startIcon}
      {children}
    </AppBtn>
  );
};

export default Button;

const AppBtn = styled.button`
  border: none;
  outline: none;
  color: whitesmoke;
  border-radius: 4px;
  padding: 0.8em 2.2em;
  font-size: 1em;
  cursor: pointer;
  font-weight: 400;
  border: 1px solid var(--brand-pink);
  transition: all 0.3s ease-in-out;
  background-color: var(--nav-blue);

  :hover {
    background-color: #fc518555;
  }

  ${({ startIcon, endIcon }) => (startIcon || endIcon) && css``}
`;
