import React from "react";
import Box from "../Box";
import Column from "../Column";
import Heading from "../Heading";
import Project from "../Project";
import Row from "../Row";

const WorkSection = (props) => {
  return (
    <Row>
      <Box {...props}>
        <Heading title="2. Works" subtitle="Take A Glance At My" />
        <Column>
          <Project />
        </Column>
      </Box>
    </Row>
  );
};

export default WorkSection;
