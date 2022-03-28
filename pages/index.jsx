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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      {/* <Row>
        <Column xs="12" sm="6" md="8">
          md - 8 : sm - 6 : xs : 12
        </Column>
        <Column xs="6" md="4">
          md - 4 : xs : 6
        </Column>
      </Row> */}
      <main>
        <HeroSection id="home" />
        <AboutSection id="about" />
        <WorkSection id="work" />
      </main>

      {/* Sticky Elements */}

      <StickWrapper>
        <Hide sm md xs>
          <StickElements $mode="right" line>
            <a href="mailto:codewithmeet">codewithmeet@gmail.com</a>
          </StickElements>
        </Hide>
      </StickWrapper>
      <Footer />
    </ThemeProvider>
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
