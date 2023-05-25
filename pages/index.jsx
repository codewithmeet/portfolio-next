import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyles";

import {
  AboutSection,
  Footer,
  Header,
  HeroSection,
  Hide,
  StickElements,
  StickWrapper,
  WorkSection,
} from "../components";
import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const isLoadingStart = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(isLoadingStart);
  }, []);
  if (isLoading) return <LoadingScreen />;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta tags */}
        <meta
          name="title"
          content="Revolutionize Your Business with My Custom SaaS Solution"
        />
        <meta
          name="description"
          content="Transform the way you do business with My cutting-edge custom SaaS solution. I will work with you to create a personalized software that meets the unique needs of your organization, helping you streamline processes and improve efficiency. Say goodbye to outdated technology and hello to a more modern, efficient future. Revolutionize your business today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetmandaviya.com/" />
        <meta
          property="og:title"
          content="Revolutionize Your Business with My Custom SaaS Solution"
        />
        <meta
          property="og:description"
          content="Transform the way you do business with My cutting-edge custom SaaS solution. I will work with you to create a personalized software that meets the unique needs of your organization, helping you streamline processes and improve efficiency. Say goodbye to outdated technology and hello to a more modern, efficient future. Revolutionize your business today!"
        />

        <meta
          property="twitter:title"
          content="Revolutionize Your Business with My Custom SaaS Solution"
        />
        <meta
          property="twitter:description"
          content="Transform the way you do business with My cutting-edge custom SaaS solution. I will work with you to create a personalized software that meets the unique needs of your organization, helping you streamline processes and improve efficiency. Say goodbye to outdated technology and hello to a more modern, efficient future. Revolutionize your business today!"
        />

        {/* Meta tags  */}

        <title>Revolutionize Your Business with My Custom SaaS Solution</title>
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
