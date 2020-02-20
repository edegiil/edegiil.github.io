import React from 'react';
import { graphql } from 'gatsby';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

class Post extends React.Component<any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { category, category_count, title, date_created, content, data } = this.props;
    console.log(data);
    return (
      <>
        <SEO title='Devlog' />
        <div className='post-wrapper'>
          <div className='post-main-wrapper'>
            <div className='post-header'>
              <div className='post-header-category'>{`${category} (${category_count})`}</div>
              <div className='post-header-title-wrapper'>
                <div className='post-header-title'>{title}</div>
                <div className='post-header-date'>{date_created}</div>
              </div>
            </div>
            <div className='post-content-wrapper'>
              <div className='post-content'>
                {content}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Post.defaultProps = {
  category: 'javascript',
  category_count: 6,
  title: 'React의 기본',
  date_created: '2020. 2. 17',
  content: 'React는 무엇안가....',
};

export default withLayout(Post)({ title: 'Devlog', width: 'full' });
