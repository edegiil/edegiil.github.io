import React from 'react';
import {ThemeProvider} from 'styled-components';
import {createGlobalStyle} from 'styled-components';

import 'configs/typography.css';

const theme = {
  // colors
  MAIN_COLOR: 'hsl(0, 0%, 76%)',
  DARK_COLOR: 'hsl(0, 0%, 26%)',
  BRIGHT_COLOR: 'hsl(0, 0%, 77%)',
  BACKGROUND_COLOR: 'hsl(228, 10%, 10%)',
  HIGHLIGHT: 'hsl(0, 78%, 18%)',
  CODE_BLOCK_COLOR: 'hsl(228, 0%, 0%)',
  // breakpoints
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 960px)',
  laptop: '(max-width: 1440px)',
  // font sizes
  NORMAL_SIZE: '1rem', // 16px
  SMALL_SIZE: '0.75rem', // 12px
  TINY_SIZE: '0.5rem', // 8px
  MICRO_SIZE: '0.4rem',
  BIG_SIZE: '1.5rem', // 24px
  HUGE_SIZE: '2rem', // 32px
  GIANT_SIZE: '2.5rem', // 40px
};

const GlobalStyle = createGlobalStyle`
  html body {
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.BACKGROUND_COLOR};
    min-height: 100vh;
  }

  div {
    font-size: ${(props) => props.theme.NORMAL_SIZE};
    color: ${(props) => props.theme.MAIN_COLOR};
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
    line-height: 1.75rem;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.MAIN_COLOR};
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${(props) => props.theme.MAIN_COLOR};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${(props) => props.theme.MAIN_COLOR};
    font-weight: 400;
  }
  h1 {
    font-size: ${(props) => props.theme.GIANT_SIZE};
    font-family: 'Montserrat';
    font-weight: 100;
  }
  h2 {
    font-size: ${(props) => props.theme.HUGE_SIZE};
  }
  h3 {
    font-size: ${(props) => props.theme.BIG_SIZE};
  }
  h4 {
    font-size: ${(props) => props.theme.NORMAL_SIZE};
  }

  code {
    background-color: ${(props) => props.theme.DARK_COLOR};
    padding: 2px 4px;
    border-radius: 3px;
  }

  li {
    list-style: inside;
    text-indent: -1.5rem;
    padding-left: 1.5rem;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-font-family: 'Source Code Pro';
    --deckgo-highlight-code-border-radius: 5px;
    --deckgo-highlight-code-background: ${(props) => props.theme.CODE_BLOCK_COLOR};
    --deckgo-highlight-code-padding: 20px 24px;
    --deckgo-highlight-code-line-height: 1.5rem;
    --deckgo-highlight-code-token-operator: #d6d6d6;
    --deckgo-highlight-code-token-comment: #005c0b;
    --deckgo-highlight-code-token-punctuation: #b95bbd;
    --deckgo-highlight-code-token-property: #8aa6ed;
    --deckgo-highlight-code-token-selector: #dbb742;
    --deckgo-highlight-code-token-atrule: #6a87cc;
    --deckgo-highlight-code-token-function: #f5e371;
    --deckgo-highlight-code-token-regex: #ff5269;
  }
`;

function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
