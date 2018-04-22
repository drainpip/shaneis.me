import React from "react";
import { css, cx } from "emotion";

import { themeColor, themeSizes } from "./styles";

const heroHeader = css`
  background-image: url("https://placeimg.com/1000/400/arch/grayscale");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 3px solid ${themeColor.dark};
  height: 60vh;
`;

const navbar = css`
  height: ${themeSizes.navbarHeight};
  background-color: ${themeColor.dark};
`;

const menu = css`
  display: flex;
  height: ${themeSizes.navbarHeight};
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    color: ${themeColor.contrastColor};
    line-height: 1;
    margin: auto 1rem;
  }
`;

const masthead = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(60vh - ${themeSizes.navbarHeight});
  justify-content: center;
`;

const redTextBackground = css`
  background-color: ${themeColor.red};
  color: ${themeColor.contrastColor};
  line-height: 1;
  padding: 0.25em 0.2em;
`;

const extraLargeHeading = css`
  font-size: 4em;
`;

const Header = () => (
  <header className={heroHeader}>
    <nav className={navbar}>
      <ul className={menu}>
        <li>Logo</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className={masthead}>
      <h1 className={cx(redTextBackground, extraLargeHeading)}>Shane is me</h1>
      <p className={redTextBackground}>
        Win-win survival strategies to ensure proactive domination
      </p>
    </div>
  </header>
);

export default Header;
