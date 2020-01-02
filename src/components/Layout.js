/**
 * @flow
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';

import Header from './header';
import './layout.scss';

class Layout extends React.Component<React.Component> {
  componentDidMount() {}

  render() {
    const { children, width } = this.props;
    return (
      <>
        <Header location='aa' />
        <div className={!width ? 'layout-wrapper' : `layout-wrapper-${width}`}>
          {children}
        </div>
      </>
    );
  }
}

export default Layout;
