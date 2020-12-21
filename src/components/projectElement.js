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
  width: 400px;
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

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  margin-left: 24px;
`;

const Image = styled.img`
  max-width: 350px;
  max-height: 200px;
`;

function ProjectElement(props) {
  const {index, title, subtitle, platform, time, stacks, image} = props;

  return (
    <Container>
      <ContentGroup>
        <Title>{`${index}_${title}`}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <DescriptionText>{`${platform} ${time}`}</DescriptionText>
        <DescriptionText>
          {
            stacks.map((stack, i) => {
              let string = stack;
              if (stacks.length - 1 !== i) {
                string = string + ' | ';
              }
              return string;
            })
          }
        </DescriptionText>
      </ContentGroup>
      <ImageGroup>
        <Image src={image} />
      </ImageGroup>
    </Container>
  );
}

ProjectElement.defaultProps = {
  index: '01',
  title: '플레이픽',
  subtitle: '코디 결정장애를 해결하기 위한 플랫폼',
  platform: 'APP',
  time: ' 2018.8 ~ 2019.3',
  stacks: ['React Native', 'ExpressJS', 'Firebase'],
  image: `https://pbs.twimg.com/media/EdDlUzOVAAAGsnc?format=jpg&name=4096x4096`,
};

export default ProjectElement;
