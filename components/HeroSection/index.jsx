import React from "react";
import Box from "../Box";
import Button from "../Button";
import { motion } from "framer-motion";

import profilePic from "../../public/profile-1.png";
import topRatedBadge from "../../public/top-rated.png";

import {
  HeroBackground,
  HeroPic,
  HeroPicContainer,
  HeroPicWrapper,
  HeroTextContainer,
  HeroTopRatedPara,
  HeroTopRatedWrapper,
  HeroWrapper,
} from "./HeroSection.styled";

import Row from "../Row";
import Column from "../Column";
import Image from "next/image";

const HeroSection = (props) => {
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

  const one = (
    <h1>
      Hello👋🏻‍,
      <br />
      I&apos;m <span>Meet Mandaviya</span>,
      <br /> I build things for the web.
    </h1>
  );

  const two = (
    <h3>
      I have 3+ years of experience in crafting web applications and solutions
      for <span>start-ups</span> to <span>large companies</span>. Also I help
      business owners find their success by building MVPs. Currently I&apos;m at
      Mars and solving problems for aliens.
    </h3>
  );

  const three = (
    <HeroTopRatedWrapper>
      <Image
        src={topRatedBadge}
        alt="Upwork Top Rated Badge"
        width={52}
        height={70}
      />
      <HeroTopRatedPara>Top Rated Freelancer on Upwork.</HeroTopRatedPara>
    </HeroTopRatedWrapper>
  );

  const elements = [one, two, three];

  return (
    // <HeroBackground>
    <Row>
      <Column lg="8" md="12" sm="12" xs="12">
        <Box {...props}>
          <HeroWrapper>
            <HeroTextContainer
              initial="hidden"
              whileInView="show"
              variant={container}
              viewport={{ once: true }}
            >
              {elements.map((element, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  style={{
                    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
                    transitionDelay: `${(index + 1.5) * 200}ms`,
                  }}
                >
                  {element}
                </motion.div>
              ))}
            </HeroTextContainer>
          </HeroWrapper>
        </Box>
      </Column>

      <Column lg="4" md="12" sm="12" xs="12">
        <HeroPicWrapper
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <HeroPicContainer>
            <HeroPic src={profilePic} width={600} height={900} priority />
          </HeroPicContainer>
        </HeroPicWrapper>
      </Column>
    </Row>
    // </HeroBackground>
  );
};

export default HeroSection;
