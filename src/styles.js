import { injectGlobal } from "emotion";

export const themeColor = {
  black: "#222",
  contrastColor: "#ede8d1",
  dark: "#434249",
  red: "#a21434",
  redDarker: "#560000",
  redLighter: "#d54767"
};

export const themeSizes = {
  navbarHeight: "3rem"
};

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Ultra|Oxygen");

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: ${themeColor.dark};
    font-family: "Oxygen", sans-serif;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${themeColor.red};
    font-family: "Ultra", serif;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a,
  a:default {
    color: ${themeColor.red};
  }

  a:visited {
    color: ${themeColor.redDarker};
  }

  a:active,
  a:focus,
  a:hover {
    color: ${themeColor.redLighter};
  }
`;

export default { themeColor, themeSizes };
