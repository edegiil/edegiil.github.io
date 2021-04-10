import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Helmet} from 'react-helmet';
import {
  defineCustomElements as deckDeckGoHighlightElement,
} from '@deckdeckgo/highlight-code/dist/loader';

import Header from 'components/header';

import Theme from 'configs/theme';

import 'fontsource-noto-sans-kr';
import 'fontsource-noto-sans-kr/700.css';
import 'fontsource-noto-sans-kr/100.css';
import 'fontsource-montserrat';
import '@fontsource/source-code-pro';

deckDeckGoHighlightElement();

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

  pre {
    background-color: ${(props) => props.theme.DARK_COLOR};
    padding: 12px 16px;
    border-radius: 8px;
    white-space: break-spaces;
    line-height: 18px;
    font-size: 1.2rem;

    code {
      color: white;
    }
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


function Layout({children}) {
  return (
    <React.Fragment>
      <Theme>
        <Helmet>
          <meta charSet='utf-8' />
          <title>edegiil.github.io</title>
        </Helmet>
        <GlobalStyle />
        <Header />
        {children}
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
