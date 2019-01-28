import React, { Component } from 'react'

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class Page404 extends Component {
  render() {
    return (
      <Layout>
        <SEO title="404" />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '95%' }}>
          <h1 style={{ textAlign: 'center' }}>PAGE NOT FOUND</h1>
          <p style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>code: 404</p>
        </div>
      </Layout>
    )
  }
}

export default Page404;
