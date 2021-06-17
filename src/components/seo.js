import React from 'react';
import {Helmet} from 'react-helmet';

function SEO({title, description, image}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      {
        image ?? <meta name='image' content={image} />
      }

      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://edegiil.github.io' />
      <meta property='og:site_name' content='edegil 기술 블로그' />
      <meta property='og:locale' content='ko' />
      {
        image ?? <meta property='og:image' content={image} />
      }
    </Helmet>
  );
}

export default SEO;
