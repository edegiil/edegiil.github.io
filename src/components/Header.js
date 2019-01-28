import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
    const { siteTitle } = this.props;
    return(
      <div style={{ marginBottom: `2rem`, height: 140, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{ color: '#555', textDecoration: `none` }}>
              { siteTitle }
            </Link>
          </h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <p style={{ fontSize: 24, margin: 0, textDecoration: 'underline' }}>profile</p>
          <p style={{ fontSize: 24, margin: 0, textDecoration: 'underline' }}>work</p>
          <p style={{ fontSize: 24, margin: 0, textDecoration: 'underline' }}>devlog</p>
          <p style={{ fontSize: 24, margin: 0, textDecoration: 'underline' }}>contact</p>
        </div>
      </div>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
