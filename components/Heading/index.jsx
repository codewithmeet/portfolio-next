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
  margin: 0 0 2em 0;
`;

const CustomHeading = styled(motion.h2)`
  position: relative;
  color: #ffffff;
  font-size: 2rem;
  ::after {
    position: absolute;
    content: "";
    height: 3px;
    border-radius: 10px;
    width: 2em;
    background-color: #fc5851;
    top: 50%;
    left: -2.4em;
    bottom: 0;
  }
`;

const CustomSubHeading = styled(motion.p)`
  color: #fc5851;
  font-weight: 500;
`;
