import React from 'react';
import propTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';

const stationList = ({ stations }) => (
  <List containerStyle={{ marginBottom: 20 }}>
    {
      stations.map(({ ID, station }) => (
        <ListItem
          roundAvatar
          avatar
          key={ID}
          title={station}
          selectedBackgroundColor="grey"
        />
      ))
    }
  </List >);

stationList.propTypes = {
  stations: propTypes.arrayOf(propTypes.any),
};

stationList.defaultProps = {
  stations: [],
};

export default stationList;
