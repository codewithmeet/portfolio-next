import { motion } from "framer-motion";
import React from "react";
import config from "../../config";
import Box from "../Box";
import Column from "../Column";
import Heading from "../Heading";
import Row from "../Row";
import SectionContainer from "../SectionContainer";
import {
  AboutDosList,
  AboutDosListItem,
  AboutWrapper,
  SkillsList,
  SkillsListItem,
} from "./AboutSection.style";

/* Transition */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    animate: { pathLength: 2 },
  },
};

const AboutSection = (props) => {
  return (
    <Row>
      <Box {...props}>
        <Heading title="1. About I can" subtitle="Know more" />
        <AboutWrapper>
          <Column lg="12" xs="12" sm="12">
            <AboutDosList
              variants={container}
              className="fancy-list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {config.about.map((dos, index) => (
                <AboutDosListItem
                  key={index}
                  variants={item}
                  style={{
                    transitionDelay: `${(index + 0.8) * 200}ms`,
                  }}
                >
                  {dos}
                </AboutDosListItem>
              ))}
            </AboutDosList>
          </Column>
          <hr />
          <Column lg="4" xs="12" sm="12">
            <Heading title="Toolbelt" subtitle="My Awesome" />
            <SkillsList
              variants={container}
              className="fancy-list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {config.skills.map((skill, index) => (
                <SkillsListItem
                  key={index}
                  variants={item}
                  style={{
                    transitionDelay: `${(index + 1.5) * 200}ms`,
                  }}
                >
                  {skill}
                </SkillsListItem>
              ))}
            </SkillsList>
          </Column>
        </AboutWrapper>
      </Box>
    </Row>
  );
};

export default AboutSection;
