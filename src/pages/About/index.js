import React from 'react';

import withLayout from 'hoc/withLayout';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class About extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <SEO title='About' />
        <div className='about-wrapper'>
          <div className='about-column'>
            <div className='about-main-box'>
              <div className='about-design-bar' />
              <div className='about-main-name'>Wingtree</div>
            </div>
            <div className='about-content-box'>
              <div className='about-title'>학력</div>
              <div className='about-content'>
                <div className='about-content-column'>
                  <div className='about-content-main-text'>영동고등학교</div>
                  <div className='about-content-text'>2012. 3 ~ 2015. 2</div>
                </div>
                <div className='about-content-column'>
                  <div className='about-content-main-text'>경북대학교</div>
                  <div className='about-content-text-box'>
                    <div className='about-content-sub-column'>
                      <div className='about-content-subtext'>전자공학</div>
                      <div className='about-content-text'>2015. 3 ~ </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='about-column'>
            <div className='about-content-box'>
              <div className='about-title'>관심분야</div>
              <div className='about-content'>
                <div className='about-content-text'>A.I.</div>
                <div className='about-content-text'>Virtual Reality</div>
                <div className='about-content-text'>Mobile App</div>
                <div className='about-content-text'>LotR</div>
                <div className='about-content-text'>MARVEL</div>
                <div className='about-content-text'>STARWARS</div>
              </div>
            </div>
            <div className='about-content-box'>
              <div className='about-title'>경력</div>
              <div className='about-content'>
                <div className='about-content-column'>
                  <div className='about-content-main-text'>아일토스</div>
                  <div className='about-content-text-box'>
                    <div className='about-content-sub-column'>
                      <div className='about-content-subtext'>개발자</div>
                      <div className='about-content-text'>2018. 8 ~ 2018. 12</div>
                    </div>
                    <div className='about-content-sub-column'>
                      <div className='about-content-subtext'>Technical Leader</div>
                      <div className='about-content-text'>2019. 1 ~ 2019. 12</div>
                    </div>
                    <div className='about-content-sub-column'>
                      <div className='about-content-subtext'>개발자</div>
                      <div className='about-content-text'>2020. 1 ~ </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withLayout(About)({ title: 'About', width: 'full' });
