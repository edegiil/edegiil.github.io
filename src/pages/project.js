import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import Layout from 'components/layout';
import Footer from 'components/footer';
import ProjectElement from 'components/projectElement';

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

function Proejct({data}) {
  const {edges} = data.allMdx;

  return (
    <Layout withHeader>
      <Main>
        <TitleGroup>
          <Title>PROJECT</Title>
        </TitleGroup>
        <Content>
          {
            edges.map((project) => {
              const {title, status, summary, time, path, thumbnail} = project?.node?.frontmatter;
              return (
                <ProjectElement
                  title={title}
                  status={'CLOSED'}
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
      sort: {fields: frontmatter___time, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            platform
            summary
            thumbnail
            time
            path
          }
        }
      }
    }
  }
`;

export default Proejct;
