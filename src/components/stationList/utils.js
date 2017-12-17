import React from 'react';
import propTypes from 'prop-types';
import StationItem from './components/stationItem';

export const keyExtractor = item => item.ID;

export const renderItem = ({ item }) => ((<StationItem {...item} />));

renderItem.propTypes = {
  item: propTypes.shape({}).isRequired,
};
