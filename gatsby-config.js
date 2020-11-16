/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'wingtree.github.io',
    siteUrl: 'https://wingtree.github.io',
    description: 'wingtree의 개발자 블로그입니다.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wingtree.github.io',
        short_name: 'wingtree',
        start_url: '/',
        background_color: '#16171b',
        theme_color: '#16171b',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
