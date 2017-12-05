import _ from 'lodash';
import React from 'react';
import { StyleSheet } from 'react-native';
import getStatus from './getStatus';
import stationList from './components/stationList';

import { LINES } from '../constants';

const stations = _.map(LINES.TUBE, (station, ID) => ({
  ID,
  station,
}));

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { status: 'Fetching' };
  }

  componentDidMount() {
    this.fetchData().done();
  }

  async fetchData() {
    try {
      const { status } = await getStatus('northern');
      this.setState({ status });
    } catch (err) {
      this.setState({ status: 'Failed to fetch network request' });
    }
  }

  render() {
    return (
      stationList({ stations })
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
