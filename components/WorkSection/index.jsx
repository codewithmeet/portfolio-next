import React from "react";
import Box from "../Box";
import Column from "../Column";
import Heading from "../Heading";
import Row from "../Row";

const WorkSection = (props) => {
  return (
    <Row>
      <Box {...props}>
        <Heading title="Works" subtitle="Take A Glance At My" />
        <Column></Column>
      </Box>
    </Row>
  );
};

export default WorkSection;
