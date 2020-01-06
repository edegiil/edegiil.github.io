import React from 'react';

import withLayout from 'hoc/withLayout';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class Devlog extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <SEO title='Devlog' />
        <div className='devlog-wrapper'>
          <div className='devlog-menu-wrapper'>
            <div className='devlog-menu-column'>
              <div className='devlog-menu-text'>{`javascript (${6})`}</div>
            </div>
            <div className='devlog-menu-column'>
              <div className='devlog-menu-text'>{`react (${3})`}</div>
            </div>
            <div className='devlog-menu-column'>
              <div className='devlog-menu-text'>{`react native (${11})`}</div>
            </div>
          </div>
          <div className='devlog-list-wrapper'>
            <div className='devlog-post-wrapper'>
              <img className='devlog-post-image' alt='post-image' src='' />
              <div className='devlog-post-text-wrapper'>
                <div className='devlog-post-text-title-wrapper'>
                  <div className='devlog-post-text-title'>{'리액트의 기본'}</div>
                  <div className='devlog-post-text-title-date'>{'2020.1.6'}</div>
                </div>
                <div className='devlog-post-text'>
                  {'리액트는 어쩌고 저쩌고'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withLayout(Devlog)({ title: 'Devlog', width: 'full' })
