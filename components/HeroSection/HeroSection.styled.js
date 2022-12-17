import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import config from "../../config";

const HeroWrapper = styled.div`
  display: flex;
  padding: 0em 4em 0 0;
  @media (max-width: 768px) {
    padding: 0 1em;
  }
`;

const HeroTextContainer = styled(motion.div)`
  color: whitesmoke;
  padding: 1em 0;

  @media screen and (min-width: ${config.sizes.mobileM}) {
    padding: 4em 0;
  }

  @media screen and (min-width: ${config.sizes.mobileL}) {
    padding: 4em 0;
  }
  @media screen and (min-width: ${config.sizes.laptopL}) {
    padding: 4em 0;
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
    bottom: 9px;
    right: 5px;
    width: 60%;
    height: 60%;
    background: linear-gradient(to right, #fc5185, #f57dff);
    opacity: 0.5;
    z-index: -1;
  }
  ::after {
    content: "";
    position: absolute;
    top: 9px;
    left: 5px;
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

const HeroTopRatedWrapper = styled.div`
  display: flex;
  align-items: start;
`;

const HeroTopRatedPara = styled.div`
  margin: 20px 10px;
  font-size: 14px;

  @media screen and (min-width: ${config.sizes.laptopL}) {
    font-size: 18px;
  }
`;

const HeroBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #161122 21px, transparent 1%) center,
    linear-gradient(#161122 21px, transparent 1%) center, #fc5158;
  background-size: 22px 22px;
`;

export {
  HeroWrapper,
  HeroTextContainer,
  HeroPicContainer,
  HeroPic,
  HeroPicWrapper,
  HeroTopRatedWrapper,
  HeroTopRatedPara,
  HeroBackground,
};
