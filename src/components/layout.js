import React from 'react';
import styled from 'styled-components';
import {defineCustomElements as deckDeckGoHighlightElement} from '@deckdeckgo/highlight-code/dist/loader';

import Header from 'components/header';

import Theme from 'configs/theme';

import 'fontsource-noto-sans-kr';
import 'fontsource-noto-sans-kr/700.css';
import 'fontsource-noto-sans-kr/100.css';
import 'fontsource-montserrat';
import '@fontsource/source-code-pro';

deckDeckGoHighlightElement();

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${props => props.backgroundimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Layout({children, withHeader, backgroundimage}) {
  return (
    <React.Fragment>
      <Theme>
        {withHeader && <Header />}
        <Wrap backgroundimage={backgroundimage}>
          {children}
        </Wrap>
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
