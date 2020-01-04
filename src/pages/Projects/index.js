import React from 'react';

import withLayout from 'hoc/withLayout';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class Projects extends React.Component {
  componentDidMount() {}

  render() {
    const default_image_url = 'https://drive.google.com/uc?id=1EjNE3vC1Z47vpwivH7-L-dyo88o5munv';
    return (
      <>
        <SEO title='Projects' />
        <div className='projects-wrapper'>
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <img className='project-image' alt='project-image' src={default_image_url} />
            </div>
            <div className='project-content'>
              <div className='project-title'>
                <div className='project-count'>01.</div>
                <div className='project-title-text'>플레이픽 - 코디 결정장애 해소</div>
              </div>
              <div className='project-content-wrapper'>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>설명</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '' }
                </div>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>참여 내용</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '' }
                </div>
              </div>
            </div>
          </div>  
          <div className='project-divider' />
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <img className='project-image' alt='project-image' src={default_image_url} />
            </div>
            <div className='project-content'>
              <div className='project-title'>
                <div className='project-count'>02.</div>
                <div className='project-title-text'>M-TREE 카페 홈페이지</div>
              </div>
              <div className='project-content-wrapper'>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>설명</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '' }
                </div>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>참여 내용</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '' }
                </div>
              </div>
            </div>
          </div>  
          <div className='project-divider' />
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <img className='project-image' alt='project-image' src={default_image_url} />
            </div>
            <div className='project-content'>
              <div className='project-title'>
                <div className='project-count'>03.</div>
                <div className='project-title-text'>비지리스 - 내게 필요한 창업지원사업만 모아보세요</div>
              </div>
              <div className='project-content-wrapper'>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>설명</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '' }
                </div>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>참여 내용</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '' }
                </div>
              </div>
            </div>
          </div>  
          <div className='project-divider' />
        </div>
      </>
    )
  }
}

export default withLayout(Projects)({ title: 'Projects', width: 'full' })
