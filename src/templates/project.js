import React from 'react';
import styled from 'styled-components';

const Background = styled.div``;

const Nav = styled.div``;

const TitleGroup = styled.div``;

const Title = styled.h2``;

const Link = styled.img``;

const InfoGroup = styled.div``;

const Subtitle = styled.h3``;

const InfoText = styled.div``;

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
  title: '헤리티지 모니터',
  subtitle: '문화재 관리 시스템',
  platform: 'WEB',
  time: '2020.5 ~ 2021.3',
};

export default ProjectTemplate;
