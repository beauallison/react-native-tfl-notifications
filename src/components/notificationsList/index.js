import React from 'react';
import propTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { keyExtractor, renderItem } from './utils';
import SaveButton from './components/saveButton';

const NotificationsList = props => (
  <View style={{ flex: 1 }} >
    <FlatList
      data={props.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
    <SaveButton onPress={props.save} />
  </View>
);

NotificationsList.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({})).isRequired,
  save: propTypes.func.isRequired,
};

export default NotificationsList;
