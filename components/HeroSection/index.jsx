import React from "react";
import Box from "../Box";
import Button from "../Button";
import { motion } from "framer-motion";

import profilePic from "../../public/profile-3.png";
import topRatedBadge from "../../public/top-rated.png";

import {
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
      <br /> Unlock Your Business's Full Potential With My Modern Solutions.
    </h1>
  );

  const two = (
    <h3>
      Transform your business with my expert web solutions. With{" "}
      <span>4+ years</span> of experience in crafting custom applications, I
      have what it takes to take your start-up processes to the next level. My
      focus is on helping business owners find success, and I do that by
      building effective MVPs.{" "}
      <span>
        Don't settle for outdated technology, let me help you drive innovation
        and unlock your business's full potential.
      </span>
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
