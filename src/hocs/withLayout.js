import React from 'react';

import Header from 'components/header';
import Layout from '../components/layout';

function withLayout({Child, props}) {
  return function Page() {
    return (
      <Layout>
        <Header />
        <Child />
      </Layout>
    );
  };
}

export default withLayout;
