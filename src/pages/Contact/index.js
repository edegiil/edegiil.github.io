import React from 'react';

import withLayout from 'hoc/withLayout';

import Layout from 'components/layout';
import SEO from 'components/seo';

import './styles.scss';

class Contact extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <SEO title='Contact' />
      </>
    )
  }
}

export default withLayout(Contact)({ title: 'Contact', width: 'full' })
