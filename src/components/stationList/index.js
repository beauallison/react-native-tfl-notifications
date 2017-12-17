import React, { Component } from 'react';
import propTypes from 'prop-types';
import { FlatList } from 'react-native';
import { keyExtractor, renderItem } from './utils';

class StationList extends Component {
  constructor(props) {
    super(props);
    this.state = { isRefreshing: false };
  }

  componentDidMount() {
    if (!this.props.data) {
      this.refresh();
    }
  }

  async refresh() {
    this.setState({ isRefreshing: true });
    const data = await this.props.onRefresh;
    return this.setState({ data, isRefreshing: false });
  }

  render() {
    return (
      <FlatList
        onRefresh={() => this.refresh()}
        refreshing={this.state.isRefreshing}
        data={this.state.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  }
}

StationList.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({})),
  onRefresh: propTypes.shape({}).isRequired,
};

StationList.defaultProps = {
  data: undefined,
};

export default StationList;
