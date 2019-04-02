/*
* @flow
*/

import React from 'react';
import Reservations from './tabs/reservations';

type props = {};
export default class App extends React.PureComponent<props> {
  render() {
    return <Reservations />;
  }
}
