import React from "react";
import styled, { css } from "styled-components";
import Box from "../Box";

import config from "../../config";
import { NavLinkContainer, NavLink } from "../Header/Header.style";

const Sidebar = ({ handleScroll, active, ...props }) => {
  return (
    <CustomBox {...props}>
      <NavLinkContainer
        variants={container}
        initial="hidden"
        animate="show"
        direction="vertical"
      >
        {config.navlinks.map(({ id, title, url }, index) => (
          <NavLink
            variants={item}
            key={id}
            id={id}
            href={url}
            onClick={handleScroll}
            active={`${id === parseInt(active)}`}
            style={{ transitionDelay: `${(index + 1.5) * 100}ms` }}
            direction="vertical"
          >
            {index}.{title}
          </NavLink>
        ))}
      </NavLinkContainer>
    </CustomBox>
  );
};

/* Transition Styles */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "-10px" },
  show: { opacity: 1, y: "0px" },
};

export default Sidebar;

const CustomBox = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  place-items: center;
  height: calc(100vh - 90px);
  z-index: 9999;
  background-color: var(--light-navy);
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translate(-100%, 90px);

  ${(props) =>
    props.isShown == true &&
    css`
      display: grid;
      transform: translate(0px, 90px);
    `};

  ${(props) => console.log(props.isShown)}
`;
