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
                <div className='about-timeline-left'>
                  <div className='about-content-wrapper'>
                    <div className='about-content-text'>영동고등학교</div>
                  </div>
                  <div className='about-content-wrapper'>
                    <div className='about-content-text'>경북대학교, 전자공학</div>
                  </div>
                </div>
                <div className='about-timeline-bar'>
                  <div className='about-timeline-dot' />
                  <div className='about-timeline-dot' />
                </div>
                <div className='about-timeline-right'>
                  <div className='about-content-text'>12. 03 ~ 15. 02</div>
                  <div className='about-content-text'>15. 03 ~</div>
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
                <div className='about-timeline-left'>
                  <div className='about-content-wrapper'>
                    <div className='about-content-text'>아일토스</div>
                    <div className='about-content-subtext'>Developer</div>
                  </div>
                  <div className='about-content-wrapper'>
                    <div className='about-content-subtext'>Technical Leader</div>
                  </div>
                </div>
                <div className='about-timeline-bar'>
                  <div className='about-timeline-dot' />
                  <div className='about-timeline-dot' />
                </div>
                <div className='about-timeline-right'>
                  <div className='about-content-text'>18. 08 ~ 19. 01</div>
                  <div className='about-content-text'>19. 01 ~ </div>
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
