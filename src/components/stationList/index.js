import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import propTypes from 'prop-types';

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
        keyExtractor={item => item.ID}
        renderItem={({ item: { station, status } }) =>
          (<ListItem
            title={`${_.startCase(station)} - ${status}`}
            selectedBackgroundColor="grey"
          />)
        }
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
