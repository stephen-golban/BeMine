/* The configuration for the GraphQL Schema. */
module.exports = {
  client: {
    service: {
      name: 'GraphQL Schema',
      schemaPath: 'schema.graphql',
      extensions: {
        endpoints: {
          'Default GraphQL Endpoint': {
            url: 'https://api-dev-wedate.westeurope.azurecontainer.io/graphql',
            headers: {
              'user-agent': 'JS GraphQL',
            },
            introspect: false,
          },
        },
      },
    },
  },
};
