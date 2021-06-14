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

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  // Query for markdown nodes to use in creating pages.
  const devlog = await graphql(
    `
      {
        allMdx(limit: 100, filter: {frontmatter: {type: {eq: "devlog"}}}) {
          edges {
            node {
              frontmatter {
                path
                type
              }
            }
          }
        }
      }
    `,
  );
  const project = await graphql(
    `
      {
        allMdx(limit: 100, filter: {frontmatter: {type: {eq: "project"}}}) {
          edges {
            node {
              frontmatter {
                path
                type
              }
            }
          }
        }
      }
    `,
  );
  // Handle errors
  if (devlog.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  if (project.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve('src/templates/devlog.js');
  const posts = devlog.data.allMdx.edges;
  posts.forEach(({node}) => {
    const {path} = node.frontmatter;
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        path,
      },
    });
  });

  const projectTemplate = path.resolve('src/templates/project.js');
  project.data.allMdx.edges.forEach(({node}) => {
    const {path} = node.frontmatter;
    createPage({
      path,
      component: projectTemplate,
      context: {
        path,
      },
    });
  });
};

// Replacing '/' would result in empty string which is invalid
const replacePath = (url) => (url === '/' ? url : url.replace(/\/$/, ''));
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;

  const oldPage = {...page};
  // Remove trailing slash unless page is /
  // eslint-disable-next-line no-param-reassign
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage);
    createPage(page);
  }
};
