import React from 'react';
import { Text } from 'react-native';
import { getStations } from './utils';
import stationList from './components/stationList';

const { LINES: { TUBE } } = require('../constants');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true, status: 'Loading' };
  }

  componentDidMount() {
    this.fetchData().done();
  }

  async fetchData() {
    try {
      const stations = await getStations(TUBE);

      this.setState({ isLoading: false, stations });
    } catch (err) {
      this.setState({ status: 'Network error' });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (<Text>{this.state.status}</Text>);
    }

    return (
      stationList({ stations: this.state.stations })
    );
  }
}
