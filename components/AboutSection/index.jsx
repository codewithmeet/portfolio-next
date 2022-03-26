import { motion } from "framer-motion";
import React from "react";
import config from "../../config";
import Box from "../Box";
import Heading from "../Heading";
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
    <Box {...props} flex justifyContent="center" height="100vh">
      <SectionContainer padding>
        <Heading title="About I can" subtitle="Know more" />
        <AboutWrapper>
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

          <Heading title="Skills" />
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
        </AboutWrapper>
      </SectionContainer>
    </Box>
  );
};

export default AboutSection;
