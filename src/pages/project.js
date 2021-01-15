import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import ProjectElement from 'components/projectElement';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

const Title = styled.h2`
  font-weight: 100;
  margin-top: 0;
`;

const Main = styled.main`
  display: grid;
  flex-direction: column;
  width: 800px;
  row-gap: 16px;
`;

function Proejct({data}) {
  const {edges} = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Background>
      <TitleGroup>
        <Title>프로젝트</Title>
      </TitleGroup>
      <Main>
        {
          edges.map(({node}) => {
            const project = node.frontmatter;
            return <ProjectElement {...project} />;
          })
        }
      </Main>
    </Background>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "project"}}},
      sort: {fields: frontmatter___title, order: ASC}
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
