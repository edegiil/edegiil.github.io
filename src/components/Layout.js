import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './layout.css'

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='layout_outline' style={{ height: window.innerHeight }}>
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0px 1.0875rem 1.45rem`, paddingTop: 0, height: '95%' }}>
          { children }
        </div>
        <footer style={{ fontSize: 15, height: '5%', paddingLeft: '3%' }}>
          {`© ${new Date().getFullYear()} Wingtree, Powered by `}
          <a href="https://www.gatsbyjs.org" style={{ color: 'purple', textDecoration: 'none', fontWeight: 'bold' }}>Gatsby</a>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
