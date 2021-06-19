import React from 'react';
import styled from 'styled-components';

import parseCopyRightString from 'utils/parseCopyRightString';

import github_icon from 'assets/icons/github.png';

const GITHUB_LINK = 'https://github.com/edegiil';

const FooterWrapper = styled.footer`
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    height: 60px;
  }
`;

const Statement = styled.div`
  font-size: ${(props) => props.theme.TINY_SIZE};
  font-weight: 100;
  color: ${(props) => props.theme.DARK_COLOR};
  @media ${(props) => props.theme.tablet} {
  
  }
  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => props.theme.MICRO_SIZE};
  }
`;

const Highlight = styled.span`
  color: hsl(263, 68%, 51%);
`;

const Line = styled.div`
  width: 50px;
  height: 0.5px;
  background-color: ${(props) => props.theme.DARK_COLOR};
  margin: 0 16px;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  display: grid;
`;

const Link = styled.button`
  background-image: url(${(props) => props.icon});
  background-size: cover;
  width: 16px;
  height: 16px;
  @media ${(props) => props.theme.mobile} {
    width: 14px;
    height: 14px;
  }
`;

function Footer() {
  const handleLink = (link) => () => {
    window.open(link);
  };

  return (
    <FooterWrapper>
      <Statement>
        {parseCopyRightString()}.
        All Rights Reserved.
        powered by
        <Highlight> Gatsby</Highlight>
      </Statement>
      <Line />
      <LinkWrapper>
        <Link onClick={handleLink(GITHUB_LINK)} icon={github_icon} />
      </LinkWrapper>
    </FooterWrapper>
  );
}

export default Footer;
