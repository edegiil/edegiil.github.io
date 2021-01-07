import React, {useEffect} from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

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
  const {html, frontmatter} = data.markdownRemark;
  const {title, summary, time, platform} = frontmatter;

  useEffect(() => {
    document.getElementById('content').innerHTML = html;
  });

  return (
    <Background>
      <Nav>돌아가기</Nav>
      <TitleGroup>
        <Title>{title}</Title>
        <Link />
      </TitleGroup>
      <InfoGroup>
        <Subtitle>{summary}</Subtitle>
        <InfoText>{`${platform} | ${time}`}</InfoText>
      </InfoGroup>
      <ContentWrapper id='content' />
    </Background>
  );
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
        summary
        time
        platform
      }
    }
  }
`;

export default ProjectTemplate;
