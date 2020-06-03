import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import '/imports/ui/app.css';

const client = new ApolloClient({
  uri: '/graphql',
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

import App from '../../ui/App';

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'));
});
