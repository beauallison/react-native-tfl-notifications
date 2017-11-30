import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getStatus from './src/getStatus';

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
      <View style={styles.container}>
        <Text>{this.state.status}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
