import React from 'react';

import withLayout from 'hoc/withLayout';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class Devlog extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <SEO title='Devlog' />
      </>
    )
  }
}

export default withLayout(Devlog)({ title: 'Devlog', width: 'full' })
