import { ApolloServer, gql } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import merge from 'lodash/merge';

import DrinksSchema from '../../api/drinks/Drinks.graphql';
import DrinksResolvers from '../../api/drinks/resolvers';
import TagsSchema from '../../api/tags/Tags.graphql';
import TagsResolvers from '../../api/tags/resolvers';

const typeDefs = [DrinksSchema, TagsSchema];

const resolvers = merge(DrinksResolvers, TagsResolvers);

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
