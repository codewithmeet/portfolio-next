import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const App = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
  return App;
}

export default MyApp;
