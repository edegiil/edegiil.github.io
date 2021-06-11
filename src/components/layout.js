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
`;

function Layout({children, withHeader}) {
  return (
    <React.Fragment>
      <Theme>
        {withHeader && <Header />}
        <Wrap>
          {children}
        </Wrap>
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
