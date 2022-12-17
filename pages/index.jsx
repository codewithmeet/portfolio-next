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
  Hide,
  StickElements,
  StickWrapper,
  WorkSection,
} from "../components";
import Row from "../components/Row";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {/* Header */}
        <Header />

        {/* Sections */}
        <main>
          <HeroSection id="home" />
          <AboutSection id="about" />
          <WorkSection id="work" />
        </main>

        {/* Sticky Elements */}
        <StickWrapper>
          <Hide sm md xs>
            <StickElements $mode="right" line>
              <a href="mailto:hello@meetmandaviya.com">
                hello@meetmandaviya.com
              </a>
            </StickElements>
          </Hide>
        </StickWrapper>
        <main>
          <Footer id="hire-me" />
        </main>
      </ThemeProvider>
    </>
  );
}

// <Column lg="6">
//   <StickWrapper>
//     <StickElements $mode="right" bottom="100px" right="-100px">
//       <HeroPicWrapper
//         initial={{ y: 10, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ ease: "easeIn", duration: 1, delay: 1 }}
//         viewport={{ once: true }}
//       >
//         <HeroPicContainer>
//           <HeroPic src={profilePic} priority />
//         </HeroPicContainer>
//       </HeroPicWrapper>
//     </StickElements>
//   </StickWrapper>
// </Column>;
