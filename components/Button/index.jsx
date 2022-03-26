import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Button = ({ children, ...props }) => {
  return <AppBtn {...props}>{children}</AppBtn>;
};

export default Button;

const AppBtn = styled(motion.button)`
  border: none;
  outline: none;
  color: whitesmoke;
  border-radius: 4px;
  padding: 1em 3.2em;
  font-size: 1em;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid #fc5851;
  transition: all 0.3s ease-in-out;
  background-color: var(--nav-blue);
  :hover {
    background-color: #fc518555;
  }

  ${({ startIcon, endIcon }) =>
    startIcon ||
    (endIcon &&
      css`
    display: flex
    align-items: center
    justify-content: space-between;
  `)}
`;
