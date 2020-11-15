import React from 'react';
import {createGlobalStyle} from 'styled-components';

import Theme from 'configs/theme';

const GlobalStyle = createGlobalStyle`
  html body {
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.background_color};
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
`;


function Layout({children}) {
  return (
    <React.Fragment>
      <Theme>
        <GlobalStyle />
        {children}
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
