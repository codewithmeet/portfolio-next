import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const AboutWrapper = styled.div`
  width: 50%;
`;

const AboutDosList = styled(motion.ul)``;

const AboutDosListItem = styled(motion.li)`
  transition: var(--transition);
`;

const SkillsList = styled(motion.ul)`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

const SkillsListItem = styled(motion.li)`
  transition: var(--transition);
`;

export {
  AboutWrapper,
  AboutDosList,
  AboutDosListItem,
  SkillsList,
  SkillsListItem,
};
