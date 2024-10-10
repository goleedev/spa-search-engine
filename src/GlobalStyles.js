import { createGlobalStyle } from "styled-components";

import theme from "./styles/theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.white};
  }

  * {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    margin: 0;
  }

  p {
    margin: 0;
  }

  /* Hide scrollbar for Chrome, Safari, and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  body {
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }
`;

export default GlobalStyles;
