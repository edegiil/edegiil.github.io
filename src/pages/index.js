import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class IndexPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout width='full'>
        <SEO title="Home" />
        <div className='index-wrapper'>
          <div className='index-menu-wrapper'>
            <Link to='/About' className='menu-link'>About</Link>
            <Link to='/Projects' className='menu-link'>Projects</Link>
            <Link to='/Devlog' className='menu-link'>Dev.log</Link>
            <Link to='/Contact' className='menu-link'>Contact</Link>
          </div>
          <div className='index-main-wrapper'>
            <div className='index-design-bar' />
            <div className='index-main-name'>Wingtree</div>
            <div className='index-main-description'>개발자</div>
            {/* <div className='index-main-description'>스타트업 하는 사람</div> */}
          </div>
        </div>
        <footer>
          { `© ${new Date().getFullYear()} wingtree, powered by ` }
          <a href="https://www.gatsbyjs.org" className='footer-link'>Gatsby</a>
        </footer>
      </Layout>
    );
  }
}

export default IndexPage;
