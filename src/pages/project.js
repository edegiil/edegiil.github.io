import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import ProjectElement from 'components/projectElement';

const Background = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    padding-bottom: 40px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
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
  @media ${(props) => props.theme.tablet} {
    width: 500px;
    row-gap: 24px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 350px;
    row-gap: 24px;
  }
`;

function Proejct({data}) {
  const {edges} = data.allMarkdownRemark;

  return (
    <Background>
      <TitleGroup>
        <Title>프로젝트</Title>
      </TitleGroup>
      <Main>
        {
          edges.map(({node}, i) => {
            const project = node.frontmatter;
            return <ProjectElement {...project} key={String(i)} />;
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
