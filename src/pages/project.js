import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import Layout from 'components/layout';
import Footer from 'components/footer';
import ProjectElement from 'components/projectElement';
import SEO from 'components/seo';

import parseGraphQLToArray from 'utils/parseGraphQLToArray';

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
  @media ${(props) => props.theme.tablet} {
    width: 80%;
    row-gap: 24px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    row-gap: 16px;
    padding-bottom: 60px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
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
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

function Proejct({data}) {
  const list = parseGraphQLToArray(data);

  return (
    <Layout withHeader>
      <SEO
        title='Project | edegiil.github.io'
        description='edegil의 프로젝트'
      />
      <Main>
        <TitleGroup>
          <Title>PROJECT</Title>
        </TitleGroup>
        <Content>
          {
            list.map((project) => {
              const {title, status, summary, time, path, thumbnail} = project;
              return (
                <ProjectElement
                  key={path}
                  title={title}
                  status={status}
                  summary={summary}
                  time={time}
                  path={path}
                  thumbnail={thumbnail}
                />
              );
            })
          }
        </Content>
      </Main>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(
      filter: {frontmatter: {type: {eq: "project"}}},
      sort: {fields: frontmatter___id, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            status
            summary
            time
            path
            thumbnail
          }
        }
      }
    }
  }
`;

export default Proejct;
