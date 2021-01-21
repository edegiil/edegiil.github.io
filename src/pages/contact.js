import React from 'react';
import styled from 'styled-components';
import Clipboard from 'clipboard';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-weight: 100;
  cursor: pointer;
`;

function Contact() {
  const clipboard = new Clipboard('#contact-email');

  clipboard.on('success', () => {
    alert('이메일이 클립보드에 복사되었습니다.');
  });
  clipboard.on('error', () => {
    alert('다시 시도해주세요');
  });

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
