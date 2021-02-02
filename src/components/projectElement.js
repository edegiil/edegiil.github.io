import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

const Title = styled.h3`
  font-weight: 200;
  margin: 0;
  margin-bottom: 16px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.h4`
  margin: 0;
  margin-bottom: 8px;
  font-weight: 400;
  @media ${(props) => props.theme.tablet} {
    margin: 0;
  }
  @media ${(props) => props.theme.mobile} {
    margin: 0;
  }
`;

const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.SMALL_SIZE};
  font-weight: 100;
  margin: 0;
  margin-bottom: 8px;
  @media ${(props) => props.theme.tablet} {
    margin: 0;
  }
  @media ${(props) => props.theme.mobile} {
    margin: 0;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  margin-left: 24px;
  @media ${(props) => props.theme.tablet} {
    margin: 0;
    margin-top: 16px;
  }
  @media ${(props) => props.theme.mobile} {
    margin: 0;
    margin-top: 16px;
  }
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
      {
        thumbnail && <ImageGroup><Image src={thumbnail} /></ImageGroup>
      }
    </Container>
  );
}

export default ProjectElement;
