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

import useScrollDirection from "../../hooks/useScrollDirection";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState(0);
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
  };

  return (
    <Nav scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Container>
        <Logo>
          Meet Mandaviya<span>.</span>
        </Logo>
        <NavLinkContainer>
          {config.navlinks.map(({ id, title, url }, index) => (
            <NavLink
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={id}
              id={id}
              href={url}
              onClick={scrollTo}
              active={`${id === parseInt(active)}`}
              style={{ transitionDelay: `${(index + 1.5) * 100}ms` }}
            >
              {index}.{title}
            </NavLink>
          ))}
        </NavLinkContainer>
      </Container>
    </Nav>
  );
};

export default Header;
