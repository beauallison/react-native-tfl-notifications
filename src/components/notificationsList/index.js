import React from 'react';
import propTypes from 'prop-types';
import { FlatList } from 'react-native';
import { keyExtractor, renderItem } from './utils';

const NotificationsList = props => (
  <FlatList
    data={props.data}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
  />
);

NotificationsList.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default NotificationsList;
