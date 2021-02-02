import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';

import back_icon from 'assets/icons/back.svg';
import link_icon from 'assets/icons/link.svg';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 900px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const NavText = styled.div``;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  margin-bottom: 24px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 8px;
  font-weight: 400;
`;

const ProjectLink = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const InfoGroup = styled.div`
  width: 900px;
  margin-bottom: 8px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

const Subtitle = styled.h3`
  margin: 0;
  font-weight: 100;
`;

const InfoText = styled.div`
  margin: 0;
`;

const ContentWrapper = styled.main`
  width: 900px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

function ProjectTemplate({data}) {
  const {html, frontmatter} = data.markdownRemark;
  const {title, summary, time, platform, link} = frontmatter;

  useEffect(() => {
    document.getElementById('content-project').innerHTML = html;
  });

  const handleLink = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <Background>
      <ContentBox>
        <Link to='/project' replace>
          <NavGroup>
            <Icon src={back_icon} />
            <NavText>돌아가기</NavText>
          </NavGroup>
        </Link>
        <TitleGroup>
          <Title>{title}</Title>
          {
            link &&
            <ProjectLink src={link_icon} onClick={handleLink} />
          }
        </TitleGroup>
        <InfoGroup>
          <Subtitle>{summary}</Subtitle>
          <InfoText>{`${platform} | ${time}`}</InfoText>
        </InfoGroup>
        <ContentWrapper id='content-project' />
      </ContentBox>
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
        link
      }
    }
  }
`;

export default ProjectTemplate;
