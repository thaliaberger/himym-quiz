import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

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
    bic: "#273E94",
    sky: "#30A7B8",
    torange: "#FB604A",
    bird: "#E1B639",
    wood: "#d6ccc0",
    hover: "#f93920",
  },
};

const darkTheme = {
  colors: {
    primary: "#DDD5CB",
    dark: "#1D1C1D",
    orange: "#273E94",
    sky: "#30A7B8",
    bird: "##2b2b2b",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HIMYM Quiz</title>
        <link
          rel="shortcut icon"
          href="https://i.pinimg.com/originals/87/91/e0/8791e067c5486e07267c022720d4d21c.png"
          type="image/x-icon"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
