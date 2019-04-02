/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../setup';

// fetch is not found globally and no fetcher passed, to fix pass a fetch for test environment.
global.fetch = require('node-fetch');

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
