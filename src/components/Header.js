// @flow
import React from 'react';
import { Link } from 'gatsby';

import logo from 'images/logo.png';

import './header.scss';

class Header extends React.Component<any> {
  onClickPreperation = () => {
    alert('Comming Soon');
  }

  render() {
    const { onClickPreperation } = this;
    const { location } = this.props;
    return (
      <div className='header-wrapper'>
        <div className='header-title-wrapper'>
          <Link to='/' className='header-title-link'>
            <img alt='logo' src={logo} className='header-logo' />
            <div className='header-title'>WINGTREE</div>
          </Link>
          {
            location
              ? <div className='header-location'>{`- ${location}`}</div>
              : undefined
          }
        </div>
        <div className='header-lang-wrapper'>
          <div className='header-lang on'>KR.</div>
          <div className='header-lang off' onClick={onClickPreperation}>EN.</div>
        </div>
      </div>
    );
  }
}

export default Header;
