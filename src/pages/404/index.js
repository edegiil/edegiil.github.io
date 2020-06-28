import React from 'react';
import { Link } from 'gatsby';

import SEO from 'components/seo';

import './styles.scss';

const Page_404 = () => (
  <div className='page404-wrapper'>
    <SEO title='404: Not found' />
    <div className='page404-title'>404</div>
    <div className='page404-content'>
      존재하지 않는 페이지입니다.
    </div>
    <Link to='/' className='page404-link'>돌아가기</Link>
  </div>
);

export default Page_404;
