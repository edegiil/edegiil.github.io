function parseGraphQLToArray(graphql_data) {
  const {allMdx} = graphql_data;

  const array = allMdx.edges.map(({node}) => node.frontmatter);

  return array;
}

export default parseGraphQLToArray;
