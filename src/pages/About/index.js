import React from 'react';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

class About extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <SEO title='About' />
        <div className='about-wrapper'>
          <div className='info-section'>
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
                    <div className='about-content-subtext' />
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
                        <div className='about-content-text'>2020. 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='stack-section'>
            <div className='about-column'>
              <div className='about-main-box'>
                <div className='about-design-bar' />
                <div className='about-main-name'>기술스택</div>
              </div>
              <div className='about-content-box'>
                <div className='about-content-stack-box'>
                  <div className='about-main-stack-img-js'>JS</div>
                  <div className='about-main-stack-info-wrapper'>
                    <div className='about-main-stack-info-title'>Javascript</div>
                    <div className='about-main-stack-info-text'>객체 기반 스크립트 언어</div>
                  </div>
                </div>
                <div className='marginer' />
                <div className='about-content-stack-box'>
                  <img className='about-main-stack-img' alt='stack-img' src={require('../../../res/react.png')} />
                  <div className='about-main-stack-info-wrapper'>
                    <div className='about-main-stack-info-title'>React & React Native</div>
                    <div className='about-main-stack-info-text'>웹 프론트엔드 SPA 라이브러리 & 모바일 크로스플랫폼 프레임워크</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='about-column'>
              <div className='about-content-box'>
                <div className='about-content-stack-box'>
                  <img className='about-stack-img' alt='stack-img' src={require('../../../res/nodejs.png')} />
                  <div className='about-stack-info-wrapper'>
                    <div className='about-stack-info-title'>Node JS</div>
                    <div className='about-stack-info-text'>서버사이드용 자바스크립트 런타임</div>
                  </div>
                </div>
                <div className='marginer' />
                <div className='about-content-stack-box'>
                  <img className='about-stack-img' alt='stack-img' src={require('../../../res/html.png')} />
                  <div className='about-stack-info-wrapper'>
                    <div className='about-stack-info-title'>HTML & CSS</div>
                    <div className='about-stack-info-text'>하이퍼텍스트 마크업 언어 & 스타일 언어</div>
                  </div>
                </div>
                <div className='marginer' />
                <div className='about-content-stack-box'>
                  <img className='about-stack-img' alt='stack-img' src={require('../../../res/sass.png')} />
                  <div className='about-stack-info-wrapper'>
                    <div className='about-stack-info-title'>Sass</div>
                    <div className='about-stack-info-text'>Syntactically Awesome Style Sheets</div>
                  </div>
                </div>
              </div>
              <div className='about-content-box'>
                <div className='about-content-stack-box'>
                  <img className='about-stack-img' alt='stack-img' src={require('../../../res/firebase.png')} />
                  <div className='about-stack-info-wrapper'>
                    <div className='about-stack-info-title'>Firebase</div>
                    <div className='about-stack-info-text'>구글의 모바일 및 웹 어플리케이션 개발 플랫폼</div>
                  </div>
                </div>
                <div className='marginer' />
                <div className='about-content-stack-box'>
                  <img className='about-stack-img' alt='stack-img' src={require('../../../res/mongodb.png')} />
                  <div className='about-stack-info-wrapper'>
                    <div className='about-stack-info-title'>Mongo DB</div>
                    <div className='about-stack-info-text'>NoSQL 데이터베이스</div>
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
