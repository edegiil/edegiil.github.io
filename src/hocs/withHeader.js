import React from 'react';

import Header from 'components/header';

function withHeader({Child, props}) {
  return function Page() {
    return (
      <React.Fragment>
        <Header />
        <Child />
      </React.Fragment>
    );
  };
}

export default withHeader;
