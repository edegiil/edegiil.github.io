// @flow
import React from 'react';

import Header from 'components/Header';

import logo from 'images/logo.png';

import './styles.scss';

const withLayout = (Component: React.Component) => ({ title, width }) => ({ data }) => {
  const HOC = () => (
    <>
      <Header location={title} />
      <div className={!width ? 'layout-wrapper' : `layout-wrapper-${width}`}>
        <img src={logo} className='background-logo' alt='background-logo' />
        <Component data={data} />
      </div>
    </>
  );

  return <HOC />;
};

export default withLayout;
