import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroWrapper = styled.div`
  display: flex;
  padding: 0em 4em 0 0;
  @media (max-width: 768px) {
    padding: 0 1em;
  }
`;

const HeroTextContainer = styled(motion.div)`
  color: whitesmoke;
  padding: 4em 0;
  @media (max-width: 768px) {
    padding: 4em 0 0 0;
  }
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: max-content;
  place-content: center;
  place-items: start;
  row-gap: 2em;
  transition: var(--transition);
  span {
    color: #fc5185;
  }
  h1 {
    font-size: clamp(40px, 3vw, 80px);
    width: 100%;
  }

  h3 {
    font-size: clamp(1rem, 3vw, 1.2rem);
    line-height: 1.5em;
    text-align: justify;
    color: #e5e5e5;
  }
`;

const HeroPicWrapper = styled(motion.div)`
  position: relative;
  display: grid;
  place-items: center;
`;

const HeroPicContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  padding: 2em;
  ::before {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 5px;
    width: 60%;
    height: 60%;
    background: linear-gradient(to right, #fc5185, #f57dff);
    opacity: 0.5;
    z-index: -1;
  }
`;

const HeroPic = styled(Image)`
  position: absolute;
  background-color: var(--light-navy);
`;

export {
  HeroWrapper,
  HeroTextContainer,
  HeroPicContainer,
  HeroPic,
  HeroPicWrapper,
};
