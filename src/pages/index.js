import React from 'react';

import withLayout from 'hocs/withLayout';

function Home() {
  return (
    <React.Fragment>
      <div>Wingtree Devlog 2.0</div>
    </React.Fragment>
  );
}


export default withLayout({Child: Home});
