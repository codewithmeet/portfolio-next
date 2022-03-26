import React from "react";
import Box from "../Box";
import Button from "../Button";
import { motion } from "framer-motion";
import {
  HeroPic,
  HeroPicContainer,
  HeroPicWrapper,
  HeroTextContainer,
  HeroWrapper,
} from "./HeroSection.styled";
import SectionContainer from "../SectionContainer";

import profilePic from "../../public/profilepic.png";

const HeroSection = (props) => {
  return (
    <Box flex justifyContent="center" {...props}>
      <SectionContainer>
        <HeroWrapper>
          <HeroTextContainer>
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              Hello👋🏻‍,
              <br />
              I&apos;m <span>Meet Mandaviya</span>,
              <br /> I build things for the web.
            </motion.h1>
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              I have 3+ years of experience in crafting web applications and
              solutions for <span>start-ups</span> to{" "}
              <span>large companies</span>. Also I help business owners find
              their success by building MVPs. Currently I&apos;m at Mars and
              solving problems for aliens.
            </motion.h3>
            <Button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 2, delay: 1.3 }}
              viewport={{ once: true }}
            >
              Contact
            </Button>
          </HeroTextContainer>
        </HeroWrapper>
      </SectionContainer>
    </Box>
  );
};

export default HeroSection;
