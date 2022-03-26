import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroWrapper = styled.div`
  display: flex;

  padding: 0em 0;
`;

const HeroTextContainer = styled.div`
  width: 50%;
  color: whitesmoke;
  padding: 1em 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: max-content;
  place-content: center;
  place-items: start;
  row-gap: 2em;
  span {
    color: #fc5185;
  }

  h3 {
    line-height: 1.5em;
    text-align: justify;
    color: #e5e5e5;
  }
`;

const HeroPicWrapper = styled(motion.div)`
  display: grid;
  place-content: center;
`;

const HeroPicContainer = styled.div`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    background-color: yellow;
  }
`;

const HeroPic = styled(Image).attrs({
  height: "600",
})`
  object-fit: contain;
`;

export {
  HeroWrapper,
  HeroTextContainer,
  HeroPicContainer,
  HeroPic,
  HeroPicWrapper,
};
