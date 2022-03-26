import React from "react";
import styled from "styled-components";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <CustomSubHeading>{subtitle}</CustomSubHeading>
      <CustomHeading>{title}</CustomHeading>
    </>
  );
};

export default Heading;

const CustomHeading = styled.h2`
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

const CustomSubHeading = styled.p`
  color: #fc5851;
  font-weight: 500;
`;
