/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './App';
import env from './env';

type Props = {};
export default class Root extends PureComponent<Props> {
  constructor() {
    super();
    this.client = new ApolloClient({
      uri: env.graphqlURL,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <App />
      </ApolloProvider>
    );
  }
}
