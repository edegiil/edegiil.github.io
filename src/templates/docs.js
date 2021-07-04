import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';
import MDXContent from 'components/mdxContent';

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
        <MDXContent>{body}</MDXContent>
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
