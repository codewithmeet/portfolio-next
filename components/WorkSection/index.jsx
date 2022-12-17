import React from "react";
import Box from "../Box";
import Column from "../Column";
import Heading from "../Heading";
import Project from "../Project";
import Row from "../Row";
import config from "../../config";

const WorkSection = (props) => {
  return (
    <Row>
      <Box {...props}>
        <Heading title="2. Works" subtitle="Take A Glance At My" />
        <Column>
          {config.works.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </Column>
      </Box>
    </Row>
  );
};

export default WorkSection;
