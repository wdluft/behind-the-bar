import { ApolloServer, gql } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import merge from 'lodash/merge';

import DrinksSchema from '../../api/drinks/Drinks.graphql';
import DrinksResolvers from '../../api/drinks/resolvers';

const testSchema = `type Query {
  hi: String
  drinks: [Drink]
}`;

const typeDefs = [testSchema, DrinksSchema];

const testResolvers = {
  Query: {
    hi() {
      return 'Hello world';
    },
  },
};

const resolvers = merge(testResolvers, DrinksResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql',
});

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end();
  }
});
