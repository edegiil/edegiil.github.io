import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import Layout from 'components/layout';
import SEO from 'components/seo';

const Main = styled.main`
  display: grid;
  row-gap: 36px;
  box-sizing: border-box;
  min-height: 100vh;
  width: 800px;
  padding: 36px 0 36px;
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
    padding: 24px 0 24px;
  }
`;
const Content = styled.section`
  width: 800px;
  img {
    max-width: 100%;
    max-height: 1200px;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

function DocsTemplate({data}) {
  const {body, frontmatter} = data.mdx;
  const {title, description} = frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
      />
      <Main>
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Main>
    </Layout>
  );
}

export const query = graphql`
  query($directory: String!) {
    mdx(frontmatter: {path: {eq: $directory}}) {
      body
      frontmatter {
        title
        description
        time
      }
    }
  }
`;

export default DocsTemplate;
