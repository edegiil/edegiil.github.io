// @flow
import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

const Devlog = ({ data }: any) => {
  const { distinct, group } = data.allMarkdownRemark;

  const [category, setCategory] = useState(group[0].fieldValue);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(group.filter((v) => v.fieldValue === category)[0].edges);
  }, [category]);

  const handleCategory = (v) => () => setCategory(v);

  return (
    <>
      <SEO title='Devlog' />
      <div className='devlog-wrapper'>
        <div className='devlog-menu-wrapper'>
          {
            distinct.map((key, i) => (
              <div className='devlog-menu-column' key={String(i)}>
                <div className='devlog-menu-text' onClick={handleCategory(key)}>
                  {`${key} (${group[i].totalCount})`}
                </div>
              </div>
            ))
          }
        </div>
        <div className='devlog-list-wrapper'>
          <div className='devlog-list-title'>{category}</div>
          {
            !list
              ? undefined
              : list.map((v, i) => {
                const { title, date, path, summary, thumbnail } = v.node.frontmatter;
                return (
                  <Link to={path} className='devlog-post-wrapper' key={String(i)}>
                    <div className='devlog-post-image-wrapper'>
                      <img className='devlog-post-image' alt='post' src={thumbnail} />
                    </div>
                    <div className='devlog-post-text-wrapper'>
                      <div className='devlog-post-text-title-wrapper'>
                        <div className='devlog-post-text-title'>{title}</div>
                        <div className='devlog-post-text-title-date'>{date}</div>
                      </div>
                      <div className='devlog-post-text'>
                        {summary}
                      </div>
                    </div>
                  </Link>
                );
              })
          }
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      distinct(field: frontmatter___category)
      group(field: frontmatter___category) {
        edges {
          node {
            frontmatter {
              title
              date
              path
              summary
              thumbnail
            }
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`;

export default withLayout(Devlog)({ title: 'Devlog', width: 'full' });
