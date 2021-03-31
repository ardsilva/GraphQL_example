const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');

const server = new GraphQLServer ({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start(console.log('Servidor iniciado em http://localhost:4000'));