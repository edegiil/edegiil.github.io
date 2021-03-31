import React, {useCallback} from 'react';
import styled from 'styled-components';

import link_icon from 'assets/icons/link.svg';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: hsla(0, 0%, 0%, 0.8);
  top: 0;
`;

const Modal = styled.div`
  width: 370px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.BRIGHT_COLOR};
  border-radius: 5px;
  @media ${(props) => props.theme.mobile} {
    width: 300px;
    padding: 20px 22px;
  }
`;

const Title = styled.h3`
  width: 100%;
  margin: 0;
  color: ${(props) => props.theme.DARK_COLOR};
  margin-bottom: 8px;
`;

const SubtitleGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  color: ${(props) => props.theme.DARK_COLOR};
  font-weight: 400;
`;

const Link = styled.button`
  margin-left: 12px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Content = styled.p`
  width: 100%;
  color: ${(props) => props.theme.DARK_COLOR};
  margin: 0;
  margin-bottom: 16px;
  font-weight: 400;
  white-space: pre-line;
`;

const CloseButton = styled.button`
  font-size: ${(props) => props.theme.NORMAL_SIZE};
`;

function AboutModal({closeModal, data}) {
  const {title, subtitle, link, detail} = data;

  const handleLink = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <Background>
      <Modal>
        <Title>{title}</Title>
        <SubtitleGroup>
          <Subtitle>{subtitle}</Subtitle>
          {
            link && (
              <Link onClick={handleLink}>
                <Icon src={link_icon} />
              </Link>
            )
          }
        </SubtitleGroup>
        {
          detail && <Content>{detail}</Content>
        }
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </Modal>
    </Background>
  );
}

export default AboutModal;
