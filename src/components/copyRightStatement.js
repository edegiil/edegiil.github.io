import React from 'react';
import styled from 'styled-components';

import parseCopyRightString from 'utils/parseCopyRightString';

const Statement = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 8px;
  right: 8px;
  font-weight: 100;
`;

const Highlight = styled.span`
  color: hsl(263, 68%, 51%);
`;

function copyRightStatement() {
  return (
    <Statement>
      {parseCopyRightString()},
      powered by
      <Highlight> Gatsby</Highlight>
    </Statement>
  );
}

export default copyRightStatement;
