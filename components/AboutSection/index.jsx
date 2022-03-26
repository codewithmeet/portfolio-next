import React from "react";
import Box from "../Box";
import Heading from "../Heading";
import SectionContainer from "../SectionContainer";

const AboutSection = (props) => {
  return (
    <Box {...props} flex justifyContent="center" height="100vh">
      <SectionContainer padding>
        <Heading title="About Me" subtitle="Know more" />
      </SectionContainer>
    </Box>
  );
};

export default AboutSection;
