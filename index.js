import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const typeDefs = './graphql/schema.graphql';

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
