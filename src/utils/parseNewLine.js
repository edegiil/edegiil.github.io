import React from 'react';

function parseNewLine(string) {
  const a = string?.split('\n').map((line, i) => {
    return (<React.Fragment key={i}>{line}<br/></React.Fragment>);
  });

  return a;
}

export default parseNewLine;
