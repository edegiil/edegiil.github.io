import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Helmet} from 'react-helmet';

import Theme from 'configs/theme';

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
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;


function Layout({children}) {
  return (
    <React.Fragment>
      <Theme>
        <Helmet>
          <meta charSet='utf-8' />
          <title>wingtree.github.io</title>
        </Helmet>
        <GlobalStyle />
        {children}
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
