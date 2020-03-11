/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `,
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve('src/templates/devlog.js');
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const url = node.frontmatter.path;
    createPage({
      path: url,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        path: url,
      },
    });
  });
};

// Replacing '/' would result in empty string which is invalid
const replacePath = (url) => (url === '/' ? url : url.replace(/\/$/, ''));
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const oldPage = { ...page };
  // Remove trailing slash unless page is /
  // eslint-disable-next-line no-param-reassign
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage);
    createPage(page);
  }
};

// You can delete this file if you're not using it
