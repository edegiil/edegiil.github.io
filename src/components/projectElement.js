import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 200;
  margin: 0;
  margin-bottom: 16px;
`;

const Subtitle = styled.h4`
  margin: 0;
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.SMALL_SIZE};
  font-weight: 100;
  margin: 0;
  margin-bottom: 8px;
`;

const Image = styled.img`

`;

function ProjectElement(props) {
  const {index, title, subtitle, platform, time, stacks} = props;

  return (
    <Container>
      <ContentGroup>
        <Title>01_플레이픽</Title>
        <Subtitle>코디 결정장애 해소를 위한 플랫폼</Subtitle>
        <DescriptionText>WEB 2018.8 ~ 2019.3</DescriptionText>
        <DescriptionText>React | ExpressJS | MongoDB | Firebase</DescriptionText>
      </ContentGroup>
      <Image />
    </Container>
  );
}

export default ProjectElement;
