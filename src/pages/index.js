import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import SEO from '../components/SEO';
import Layout from '../components/Layout';

class IndexPage extends Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={
          (data) => (
            <Layout>
              <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
              <Header siteTitle={data.site.siteMetadata.title} />
            </Layout>
          )
        }
      />
    )
  }
}

export default IndexPage
