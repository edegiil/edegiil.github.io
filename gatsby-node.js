const path = require('path');
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        templates: path.resolve(__dirname, 'src/templates'),
        configs: path.resolve(__dirname, 'src/configs'),
        hocs: path.resolve(__dirname, 'src/hocs'),
        assets: path.resolve(__dirname, 'src/assets'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
