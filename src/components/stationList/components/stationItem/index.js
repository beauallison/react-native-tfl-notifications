import _ from 'lodash';
import React from 'react';
import propTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

const StationItem = props =>
  (<ListItem
    title={`${_.startCase(props.station)} - ${props.status}`}
    selectedBackgroundColor="grey"
  />);

StationItem.propTypes = {
  station: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
};

export default StationItem;
