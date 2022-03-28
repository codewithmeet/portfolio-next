import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle }) => {
  return (
    <CustomHeaderWrapper>
      <CustomSubHeading
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, type: "tween" }}
      >
        {subtitle}
      </CustomSubHeading>
      <CustomHeading
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ pathLength: 2 }}
        transition={{ duration: 1, type: "tween" }}
      >
        {title}
      </CustomHeading>
    </CustomHeaderWrapper>
  );
};

export default Heading;

const CustomHeaderWrapper = styled.div`
  margin: 1em 0;
  @media (max-width: 768px) {
    margin-left: 1em;
  }
`;

const CustomHeading = styled(motion.h2)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
  ::after {
    content: "";
    height: 3px;
    width: 400px;
    background-color: #fc5851;
    bottom: 0;
    display: block;
    position: relative;
    top: 50%;
    height: 1px;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    ::after {
      width: 100%;
    }
  }
`;

const CustomSubHeading = styled(motion.p)`
  color: #fc5851;
  font-weight: 500;
`;
