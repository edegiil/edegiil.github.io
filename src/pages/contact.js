import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-weight: 100;
  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => props.theme.HUGE_SIZE};
  }
  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => props.theme.BIG_SIZE};
  }
`;

function Contact() {
  return (
    <Background>
      <Text
        id='contact-email'
        data-clipboard-text='electropark917@gmail.com'
      >
        electropark917@gmail.com
      </Text>
    </Background>
  );
}

export default Contact;
