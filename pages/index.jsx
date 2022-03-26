import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyles";

import profilePic from "../public/profilepic.png";
import {
  AboutSection,
  Box,
  Footer,
  Header,
  HeroSection,
  StickElements,
  StickWrapper,
  WorkSection,
} from "../components";
import {
  HeroPic,
  HeroPicContainer,
  HeroPicWrapper,
} from "../components/HeroSection/HeroSection.styled";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main>
        <div>
          <HeroSection id="home" />
          <AboutSection id="about" />
          <StickWrapper>
            <StickElements $mode="right" bottom="15px" right="-50px">
              {/* Hero Pics */}
              <HeroPicWrapper
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <HeroPicContainer>
                  <HeroPic src={profilePic} priority />
                </HeroPicContainer>
              </HeroPicWrapper>
            </StickElements>
          </StickWrapper>
        </div>
        <WorkSection id="work" />
      </main>

      {/* Sticky Elements */}
      <StickWrapper>
        <StickElements $mode="right" line>
          <a href="mailto:codewithmeet">codewithmeet@gmail.com</a>
        </StickElements>
      </StickWrapper>
      <Footer />
    </ThemeProvider>
  );
}
