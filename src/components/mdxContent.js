import React from 'react';
import styled from 'styled-components';
import {MDXRenderer} from 'gatsby-plugin-mdx';

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

  /* markdown styles */
  a {
    text-decoration: underline;
    font-weight: bold;
  }

  h1, h2 {
    border-bottom: 0.5px solid ${(props) => props.theme.DARK_COLOR};
    padding-bottom: 1rem;
    font-weight: bold;
  }
  h3, h4, h5 {
    font-weight: 500;
  }

  code {
    background-color: ${(props) => props.theme.DARK_COLOR};
    padding: 2px 6px;
    border-radius: 6px;
  }

  li {
    list-style: inside;
    text-indent: -1.5rem;
    padding-left: 1.5rem;
  }

  blockquote {
    border-left: 3px solid ${(props) => props.theme.LIGHT_COLOR};
    margin-left: 0;
    padding-left: 16px;
  }

  table {
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5rem;
  }
  table thead th {
    text-align: center;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: ${(props) => props.theme.LIGHT_COLOR};
    border-top: 2px solid ${(props) => props.theme.LIGHT_COLOR};
    border-bottom: 2px solid ${(props) => props.theme.LIGHT_COLOR};
  }
  table tbody th {
    padding: 10px 15px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid ${(props) => props.theme.LIGHT_COLOR};
  }
  table td {
    padding: 10px 15px;
    vertical-align: top;
    border-bottom: 1px solid ${(props) => props.theme.LIGHT_COLOR};
  }
`;

function MDXContent({children}) {
  return (
    <Content>
      <MDXRenderer>
        {children}
      </MDXRenderer>
    </Content>
  );
}

export default MDXContent;
