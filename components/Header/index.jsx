import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Logo,
  Nav,
  NavLink,
  NavLinkContainer,
} from "./Header.style";
import config from "../../config";
import { Spiral as Hamburger } from "hamburger-react";
import useScrollDirection from "../../hooks/useScrollDirection";
import Hide from "../Hide";
import Sidebar from "../Sidebar";

const Header = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target);
    if (location) {
      location.scrollIntoView(true);
      setActive(e.target.id);
    }
    router.push(`/${target}`);
    setOpen(false);
  };

  const handleSideBar = () => setOpen(!open);

  return (
    <>
      <Nav scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        <Container>
          <Logo>
            Meet Mandaviya<span>.</span>
          </Logo>
          <Hide xs sm md>
            <NavLinkContainer
              variants={container}
              initial="hidden"
              animate="show"
            >
              {config.navlinks.map(({ id, title, url }, index) => (
                <NavLink
                  variants={item}
                  viewport={{ once: true }}
                  key={id}
                  id={id}
                  href={url}
                  onClick={scrollTo}
                  active={`${id === parseInt(active)}`}
                  style={{ transitionDelay: `${(index + 1.5) * 100}ms` }}
                >
                  <span>{index}</span>.{title}
                </NavLink>
              ))}
            </NavLinkContainer>
          </Hide>
          <Hide lg>
            <Hamburger onToggle={handleSideBar} toggled={open} />
          </Hide>
        </Container>
      </Nav>
      <Sidebar handleScroll={scrollTo} active={active} isShown={open} />
    </>
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
export default Header;
