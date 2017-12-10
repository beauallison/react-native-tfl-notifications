import _ from 'lodash';
import React from 'react';
import propTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';

const stationList = ({ stations }) => (
  <List containerStyle={{ marginBottom: 20 }}>
    {
      stations.map(({ ID, station, status }) => (
        <ListItem
          key={ID}
          title={`${_.startCase(station)} - ${status}`}
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
