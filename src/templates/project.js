import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  width: 900px;
  margin-bottom: 4px;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Link = styled.img``;

const InfoGroup = styled.div`
  width: 900px;
  margin-bottom: 32px;
`;

const Subtitle = styled.h3`
  margin: 0;
`;

const InfoText = styled.div`
  margin: 0;
`;

const ContentWrapper = styled.main``;

function ProjectTemplate({data}) {
  const {title, subtitle, platform, time} = data;

  return (
    <Background>
      <Nav>돌아가기</Nav>
      <TitleGroup>
        <Title>{title}</Title>
        <Link />
      </TitleGroup>
      <InfoGroup>
        <Subtitle>{subtitle}</Subtitle>
        <InfoText>{`${platform} | ${time}`}</InfoText>
      </InfoGroup>
      <ContentWrapper>

      </ContentWrapper>
    </Background>
  );
}

ProjectTemplate.defaultProps = {
  data: {
    title: '헤리티지 모니터',
    subtitle: '문화재 관리 시스템',
    platform: 'WEB',
    time: '2020.5 ~ 2021.3',
  },
};

export default ProjectTemplate;
