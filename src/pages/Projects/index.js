// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

class Projects extends React.Component {
  componentDidMount() {}

  showDetailImage = (image_url: string) => () => {
    window.open(image_url);
  }

  openLink = (url: string) => () => {
    if (!url) {
      alert('링크가 없습니다.');
      return;
    }
    window.open(url);
  }

  render() {
    const { showDetailImage, openLink } = this;
    // const default_image_url = 'https://drive.google.com/uc?id=1EjNE3vC1Z47vpwivH7-L-dyo88o5munv';
    const playpick_image_url = 'https://drive.google.com/uc?id=16YIEYZh4toCHhMTsjSTaLU_UXjMWhHyu';
    const m_tree_url = 'https://drive.google.com/uc?id=1vxvaKCv-n_uAXJyCEUIpvkZZh8Twh77n';
    const busyless_url = 'https://drive.google.com/uc?id=1cYkoaEZa9aNHL9l7ohEUIgWIQDp3Volg';
    return (
      <>
        <SEO title='Projects' />
        <div className='projects-wrapper'>
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <img className='project-image' alt='project' src={playpick_image_url} onClick={showDetailImage(playpick_image_url)} />
            </div>
            <div className='project-content'>
              <div className='project-title'>
                <div className='project-count'>01.</div>
                <div className='project-title-text' onClick={openLink()}>플레이픽 - 코디 결정장애 해소</div>
              </div>
              <div className='project-content-wrapper'>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>설명</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '플레이픽' }
                </div>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>참여 내용</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { 'ver2. 리팩토링, 프론트엔드, 백엔드, 쇼핑몰 크롤러' }
                </div>
              </div>
            </div>
          </div>
          <div className='project-divider' />
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <img className='project-image' alt='project' src={m_tree_url} onClick={showDetailImage(m_tree_url)} />
            </div>
            <div className='project-content'>
              <div className='project-title'>
                <div className='project-count'>02.</div>
                <div className='project-title-text' onClick={openLink('https://m-tree.club/')}>M-TREE 카페 홈페이지</div>
              </div>
              <div className='project-content-wrapper'>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>설명</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '엠트리' }
                </div>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>참여 내용</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '유지보수' }
                </div>
              </div>
            </div>
          </div>
          <div className='project-divider' />
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <img className='project-image' alt='project' src={busyless_url} onClick={showDetailImage(busyless_url)} />
            </div>
            <div className='project-content'>
              <div className='project-title'>
                <div className='project-count'>03.</div>
                <div className='project-title-text' onClick={openLink('https://play.google.com/store/apps/details?id=com.ailtos.busyless')}>비지리스 - 내게 필요한 창업지원사업만 모아보세요</div>
              </div>
              <div className='project-content-wrapper'>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>설명</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '비지리스' }
                </div>
                <div className='project-content-title-wrapper'>
                  <div className='project-content-title-text'>참여 내용</div>
                  <div className='project-content-title-design-bar' />
                </div>
                <div className='project-content-text'>
                  { '지원사업 크롤러, 관리자페이지, 유지보수, 백엔드' }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withLayout(Projects)({ title: 'Projects', width: 'full' });
