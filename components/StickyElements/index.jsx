import React, { Children } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const StickElements = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      {props.line && <Line />}
    </Container>
  );
};

export const StickWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
`;
const Container = styled.div`
  position: absolute;
  z-index: 9999;
  bottom: ${(props) => props.bottom || 0};

  font-weight: 300;
  font-size: 0.9em;
  writing-mode: vertical-lr;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: whitesmoke;

  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          left: ${props.left ? props.left : "5em"};
        `;
      case "right":
        return css`
          right: ${props.right ? props.right : "5em"};
        `;
      default:
        return css`
          right: ${props.right ? props.right : "5em"};
        `;
    }
  }};
`;

const Line = styled.div`
  margin-top: 0.5em;
  height: 6em;
  width: 2px;
  background-color: whitesmoke;
  /* border-style: none; */
`;

export default StickElements;
