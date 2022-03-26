import React from "react";
import Box from "../Box";
import Heading from "../Heading";
import SectionContainer from "../SectionContainer";

const WorkSection = (props) => {
  return (
    <Box flex justifyContent="center" {...props} height="100vh">
      <SectionContainer padding>
        <Heading title="Works" subtitle="Take A Glance At My" />
      </SectionContainer>
    </Box>
  );
};

export default WorkSection;
