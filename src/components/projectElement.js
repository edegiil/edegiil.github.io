import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

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
  const {title, summary, platform, time, tech, thumbnail, path} = props;
  const tech_list = tech.split(',');

  return (
    <Container>
      <ContentGroup>
        <Link to={`/${path}`}>
          <Title>{title}</Title>
        </Link>
        <Subtitle>{summary}</Subtitle>
        <DescriptionText>{`${platform} ${time}`}</DescriptionText>
        <DescriptionText>
          {
            tech_list.map((stack, i) => {
              let string = stack;
              if (tech_list.length - 1 !== i) {
                string = string + ' | ';
              }
              return string;
            })
          }
        </DescriptionText>
      </ContentGroup>
      <ImageGroup>
        {
          thumbnail && <Image src={thumbnail} />
        }
      </ImageGroup>
    </Container>
  );
}

export default ProjectElement;
