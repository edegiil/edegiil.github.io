import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import Clipboard from 'clipboard';

import Layout from 'components/layout';
import Footer from 'components/footer';
import SEO from 'components/seo';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const shine = keyframes`
  from {
    background-position: top left;
  }

  to {
    background-position: top right;
  }
`;

const Text = styled.h2`
  font-weight: 100;
  font-family: 'Half-Elven', sans-serif;
  cursor: pointer;

  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => props.theme.HUGE_SIZE};
  }
  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => props.theme.BIG_SIZE};
  }

  &:hover {
    transition: all 0.5s ease;
    animation: ${shine} 2s linear infinite;
    color: #ff9e00;
    background: linear-gradient(
      45deg,
      rgba(255,158,0,1) 25%,
      rgba(255,0,0,1) 54%,
      rgba(255,158,0,1) 75%
    );
    background-size: 400% 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 4px #ffc900;
  }
`;

function Contact() {
  useEffect(() => {
    const clipboard = new Clipboard('#contact-email');

    clipboard.on('success', () => {
      alert('이메일이 클립보드에 복사되었습니다.');
    });
    clipboard.on('error', () => {});
  }, []);

  return (
    <Layout withHeader>
      <SEO
        title='Contact | edegiil.github.io'
        description='electropark917@gmail.com'
      />
      <Background>
        <Text
          id='contact-email'
          data-clipboard-text='electropark917@gmail.com'
        >
          electropark917@gmail.com
        </Text>
      </Background>
      <Footer />
    </Layout>
  );
}

export default Contact;
