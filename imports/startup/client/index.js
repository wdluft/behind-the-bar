import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import '/imports/ui/app.css';
import App from '../../ui/App';

const client = new ApolloClient({
  uri: '/graphql',
});

const ApolloApp = () => (
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'));
});
