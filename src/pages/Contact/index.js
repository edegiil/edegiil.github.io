import React from 'react';
import Clipboard from 'clipboard';

import withLayout from 'hoc/withLayout';

import SEO from 'components/seo';

import './styles.scss';

class Contact extends React.Component {
  componentDidMount() {
    const clipboard = new Clipboard('.contact-email');

    clipboard.on('success', () => {
      alert('이메일이 클립보드에 복사되었습니다.');
    });
    clipboard.on('error', () => {
      alert('다시 시도해주세요');
    });
  }

  render() {
    return (
      <>
        <SEO title='Contact' />
        <div className='contact-wrapper'>
          <div className='contact-transparent-wrapper'>
            <div className='contact-title'>Email</div>
          </div>
          <div className='contact-color-wrapper'>
            <div className='contact-email-wrapper'>
              <div className='contact-email' data-clipboard-text='electropark917@gmail.com'>electropark917@gmail.com</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withLayout(Contact)({ title: 'Contact', width: 'full' });
