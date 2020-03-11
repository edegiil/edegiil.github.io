import React from 'react';
import { Link, graphql } from 'gatsby';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

class Devlog extends React.Component<any> {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }

  componentDidMount() {
    const { list } = this.props;
    this.setState({ category: Object.keys(list)[0] });
  }

  handleCategory = (category) => () => this.setState({ category });

  render() {
    const { handleCategory } = this;
    const { category } = this.state;
    const { list, data } = this.props;
    return (
      <>
        <SEO title='Devlog' />
        <div className='devlog-wrapper'>
          <div className='devlog-menu-wrapper'>
            {
              Object.keys(list).map((key, i) => (
                <div className='devlog-menu-column' key={String(i)}>
                  <div className='devlog-menu-text' onClick={handleCategory(key)}>
                    {`${key} (${list[key].length})`}
                  </div>
                </div>
              ))
            }
          </div>
          <div className='devlog-list-wrapper'>
            <div className='devlog-list-title'>{category}</div>
            {
              !list[category]
                ? undefined
                : list[category].map((v, i) => (
                  <Link to={`Devlog/${category}/${v.title}`} className='devlog-post-wrapper' key={String(i)}>
                    <img className='devlog-post-image' alt='post' src={v.img_source} />
                    <div className='devlog-post-text-wrapper'>
                      <div className='devlog-post-text-title-wrapper'>
                        <div className='devlog-post-text-title'>{v.title}</div>
                        <div className='devlog-post-text-title-date'>{v.date_created}</div>
                      </div>
                      <div className='devlog-post-text'>
                        {v.content_summary}
                      </div>
                    </div>
                  </Link>
                ))
            }
          </div>
        </div>
      </>
    );
  }
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            category
            date
            path
            title
          }
        }
      }
    }
  }
`;

Devlog.defaultProps = {
  list: {
    javascript: [
      {
        title: 'ES6란 무엇인가',
        date_created: '2020. 1. 6',
        content_summary: 'ES6는 ECMA 2018이라고도 하며',
        img_source: '',
      },
    ],
    react: [
      {
        title: '리액트의 기본',
        date_created: '2020. 1. 7',
        content_summary: '리액트의 기본',
        img_source: '',
      },
      {
        title: 'JSX란',
        date_created: '2020. 1. 9',
        content_summary: 'JSX는 JavaScript eXtension',
        img_source: '',
      },
      {
        title: '리액트의 라이프사이클',
        date_created: '2020. 1. 11',
        content_summary: '라이프사이클은 라이프사이클이며',
        img_source: '',
      },
    ],
    react_native: [
      {
        title: '리액트 네이티브 vs Flutter',
        date_created: '2020. 1. 20',
        content_summary: '리액트 네이티브와 플러터는 가장 핫한 모바일',
        img_source: '',
      },
      {
        title: '네이티브 모듈',
        date_created: '2020. 1. 29',
        content_summary: '리액트 네이티브에서 네이티브 모듈을 만들어 보도록 합시다',
        img_source: '',
      },
    ],
  },
};

export default withLayout(Devlog)({ title: 'Devlog', width: 'full' });
