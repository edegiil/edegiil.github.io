import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class About extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout width='full'>
        <SEO title='About wingtree' />
        <div className='about-wrapper'>
          <div className='about-column'>
            <div className='about-main-box'>
              <div className='about-design-bar' />
              <div className='about-main-name'>Wingtree</div>
              <div className='about-main-description'>개발자</div>
            </div>
            <div className='about-content-box'>
              <div className='about-title'>Education</div>
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
              <div className='about-title'>Interest</div>
              <div className='about-content'>
                <div className='about-content-text'>인공지능</div>
                <div className='about-content-text'>가상현실</div>
                <div className='about-content-text'>반지의 제왕</div>
                <div className='about-content-text'>스타워즈</div>
                <div className='about-content-text'>마블 시네마틱 유니버스</div>
              </div>
            </div>
            <div className='about-content-box'>
              <div className='about-title'>Work</div>
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
      </Layout>
    );
  }
}

export default About;
