import React from 'react';
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import back_icon from 'assets/icons/back.svg';

const Background = styled.div`
  display: flex;
  min-height: 100vh;
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
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 16px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
    flex-direction: column;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Category = styled.div`
  margin: 0;
  font-weight: 100;
`;

const Subtitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  font-weight: 100;
`;

const DateCreated = styled.div`
  font-weight: 100;
`;

const Content = styled.main`
  width: 900px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
  img {
    max-width: 100%;
    max-height: 400px;
  }
`;

function DevlogTemplate({data}) {
  const {body, frontmatter} = data.mdx;
  const {category, title, summary, date_created, date_updated} = frontmatter;

  return (
    <Background>
      <ContentBox>
        <Link to='/devlog' replace>
          <NavGroup>
            <Icon src={back_icon} />
            <NavText>돌아가기</NavText>
          </NavGroup>
        </Link>
        <TitleGroup>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </TitleGroup>
        <Subtitle>{summary}</Subtitle>
        <DateCreated>{`작성일자 : ${date_created}`}</DateCreated>
        {
          date_updated && (
            <DateCreated>{`최종수정 : ${date_updated}`}</DateCreated>
          )
        }
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </ContentBox>
    </Background>
  );
};

export const query = graphql`
  query($directory: String!) {
    mdx(frontmatter: {path: {eq: $directory}}) {
      body
      frontmatter {
        path
        category
        title
        summary
        date_created
        date_updated
      }
    }
  }
`;

export default DevlogTemplate;
