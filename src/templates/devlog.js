// @flow
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

interface Data {
  markdownRemark: {
    html: string,
    frontmatter: {
      date: string,
      title: string,
      category: string,
      path: string,
    }
  }
}

const Post = ({ data }: { data: Data }) => {
  const { html } = data.markdownRemark;
  const { category, title, date_created } = data.markdownRemark.frontmatter;

  useEffect(() => {
    document.getElementById('content').innerHTML = html;
  }, []);

  return (
    <>
      <SEO title={title} />
      <div className='post-wrapper'>
        <div className='post-main-wrapper'>
          <div className='post-header'>
            <div className='post-header-category'>{category}</div>
            <div className='post-header-title-wrapper'>
              <div className='post-header-title'>{title}</div>
              <div className='post-header-date'>{date_created}</div>
            </div>
          </div>
          <div className='post-content-wrapper'>
            <div className='post-content' id='content' />
          </div>
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
        category
        path
      }
    }
  }
`;

export default withLayout(Post)({ title: 'Devlog', width: 'full' });
