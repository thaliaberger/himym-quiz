import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E1B639;
  }
`;

const theme = {
  colors: {
    primary: "#DDD5CB",
    dark: "#1D1C1D",
    orange: "#CB6B50",
    sky: "#30A7B8",
    bird: "##2b2b2b",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
