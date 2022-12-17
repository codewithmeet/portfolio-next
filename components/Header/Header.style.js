import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  border-bottom: 1px solid var(--light-navy);
  transition: var(--transition);
  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);
    `};
`;

const Container = styled.div`
  min-width: 80%;
  max-width: 80%;
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h4`
  width: 10%;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--light-slate);
  span {
    color: #fc5158;
  }
`;

const NavLinkContainer = styled(motion.ul)`
  display: flex;

  align-items: center;
  ${(props) =>
    props.direction === "vertical" &&
    "flex-direction: column; justify-content: center; align-items: flex-start; margin-block: 0; padding-inline: 0;"};

  li {
    ${(props) =>
      props.direction === "vertical" && "font-size: 2rem; margin: 10px 0;"}
  }
`;

const NavLink = styled(motion.li)`
  position: relative;
  color: whitesmoke;
  font-family: "Red Hat Mono", monospace;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 1rem;
  ${(props) => props.direction === "vertical" && "margin -bottom: 10px;"}
  transition: var(--transition);
  &::after {
    position: absolute;
    content: "";
    background: rgba(255, 193, 5, 1);
    top: ${(props) => (props.direction === "vertical" ? 36 : 22)}px;
    left: 1px;
    width: 0;
    height: 2px;
    transition: var(--transition);
  }

  span {
    color: #fc5185;
  }

  :hover {
    color: #fc5185;
    &::after {
      width: 100%;
    }
  }

  ${({ active }) =>
    active == "true" &&
    css`
      color: #fc5185;
      &::after {
        width: 100%;
      }
    `}
`;

export { Nav, Logo, Container, NavLinkContainer, NavLink };
