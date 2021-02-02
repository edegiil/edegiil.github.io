import React from 'react';
import BackgroundImage from 'gatsby-background-image';

function BackgroundLayout(props) {
  const {children, image} = props;

  return (
    <BackgroundImage fluid={image}>
      {children}
    </BackgroundImage>
  );
}

export default BackgroundLayout;
