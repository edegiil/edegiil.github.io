module.exports = {
  siteMetadata: {
    title: 'wingtree devlog',
    description: 'wingtree devlog',
    author: '@wingtree',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wingtree.github.io',
        short_name: 'wingtree',
        start_url: '/',
        background_color: '#d8d8d8',
        theme_color: '#505050',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:100,400,700', 'ZCOOL QingKe HuangYou:100,400,700'],
        },
      },
    },
    'gatsby-plugin-flow',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
