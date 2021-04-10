import React, {useCallback} from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import back_icon from 'assets/icons/back.svg';
import link_icon from 'assets/icons/link.svg';
import github_icon from 'assets/icons/github.svg';

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
  padding-bottom: 24px;
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
  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => props.theme.BIG_SIZE}
  }
`;

const ProjectLink = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-left: 8px;
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
  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => props.theme.NORMAL_SIZE}
  }
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
  img {
    max-width: 100%;
    max-height: 1200px;
  }
`;

function ProjectTemplate({data}) {
  const {body, frontmatter} = data.mdx;
  const {title, summary, time, platform, link, repository} = frontmatter;

  const handleLink = useCallback(() => {
    window.open(link);
  }, [link]);

  const handleRepositoryLink = useCallback(() => {
    window.open(repository);
  }, [repository]);

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
          {
            repository &&
            <ProjectLink src={github_icon} onClick={handleRepositoryLink} />
          }
        </TitleGroup>
        <InfoGroup>
          <Subtitle>{summary}</Subtitle>
          <InfoText>{`${platform} | ${time}`}</InfoText>
        </InfoGroup>
        <ContentWrapper>
          <MDXRenderer>{body}</MDXRenderer>
        </ContentWrapper>
      </ContentBox>
    </Background>
  );
}

export const query = graphql`
  query($path: String!) {
    mdx(frontmatter: {path: {eq: $path}}) {
      body
      frontmatter {
        title
        summary
        time
        platform
        link
        repository
      }
    }
  }
`;

export default ProjectTemplate;
