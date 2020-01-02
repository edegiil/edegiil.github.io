// @flow
import React from 'react';

import Header from 'components/Header';

import './styles.scss';

const withLayout = (Component: React.Component) => ({ title, width }) => () => {
  const HOC = () => {
    return (
      <>
        <Header location={title} />
        <div className={!width ? 'layout-wrapper' : `layout-wrapper-${width}`}>
          <Component />
        </div>
      </>
    )
  }

  return <HOC />;
}

export default withLayout;
