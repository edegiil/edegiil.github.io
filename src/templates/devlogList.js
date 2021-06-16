import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, graphql} from 'gatsby';

import Layout from 'components/layout';
import Footer from 'components/footer';
import DevlogElement from 'components/devlogElement';

import parseGraphQLToArray from 'utils/parseGraphQLToArray';
import getNavList from 'utils/getNavList';

const Main = styled.main`
  display: grid;
  row-gap: 36px;
  box-sizing: border-box;
  min-height: 100vh;
  width: 800px;
  padding: 128px 0 50px;
  flex-direction: column;
  align-items: center;
  align-content: start;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 0 5%;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0 5%;
  }
`;

const Title = styled.h2`
  font-family: 'Half-Elven', sans-serif;
  font-weight: bold;
  margin: 0;
`;

const Content = styled.div`
  display: grid;
  gap: 10px;
  align-content: start;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  width: 800px;
  @media ${(props) => props.theme.tablet} {
    width: 45%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.DARK_COLOR};
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const Thumbnail = styled.img`
  width: 360px;
  height: 210px;
  background-color: ${(props) => props.theme.DARK_COLOR};
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
    height: 201px;
  }
`;

const EmptyImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 210px;
  background-color: ${(props) => props.theme.DARK_COLOR};
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
    height: 201px;
  }
`;

const PostInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
  @media ${(props) => props.theme.tablet} {
    margin-left: 0;
  }
  @media ${(props) => props.theme.mobile} {
    margin-left: 4px;
  }
`;

const PostTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 8px;
  }
`;

const PostCategory = styled.h4`
  margin: 0;
  font-weight: 100;
`;

const PostSubtitle = styled.h4`
  margin: 0;
  margin-bottom: 8px;
  font-weight: 100;
`;

const PostDateCreated = styled.p`
  margin: 0;
  font-weight: 100;
`;

const PageNav = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled(Link)`
  color: ${props => props.theme.DARK_COLOR};

  &.current {
    font-weight: bold;
    color: ${props => props.theme.MAIN_COLOR};
  }
`;

function DevlogListTemplate({data, pageContext}) {
  const list = parseGraphQLToArray(data);
  const {page_numbers, current_page} = pageContext;

  const nav_list = getNavList(current_page, page_numbers);

  const prev_page_path = current_page === 2 ? `/devlog` : `/devlog/${current_page - 1}`;
  const next_page_path = `/devlog/${current_page + 1}`;

  return (
    <Layout withHeader>
      <Main>
        <TitleGroup>
          <Title>DEV.log</Title>
        </TitleGroup>
        <Content>
          {
            list && list.map((v, i) => {
              const {category, title, summary, date_created, thumbnail, path} = v;
              return (
                <DevlogElement
                  key={path}
                  date_created={date_created}
                  thumbnail={thumbnail}
                  path={path}
                  title={title}
                  summary={summary}
                  category={category}
                />
              );
            })
          }
        </Content>
        <PageNav>
          {
            nav_list.map((page) => {
              const path = page !== 1 ? `/devlog/${page}` : `/devlog`;
              return (
                <NavButton key={path} to={path} activeClassName='current'>{page}</NavButton>
              )
            })
          }
        </PageNav>
      </Main>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMdx(
      sort: {order: DESC, fields: frontmatter___path}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {type: {eq: "devlog"}}}
    ) {
      edges {
        node {
          frontmatter {
            path
            category
            date_created
            title
            summary
            thumbnail
          }
        }
      }
    }
  }  
`;

export default DevlogListTemplate;
