import React from 'react';
import propTypes from 'prop-types';
import NotificationsItem from './components/notificationsItem';

export const keyExtractor = item => item.ID;

export const renderItem = ({ item }) => ((<NotificationsItem {...item} />));

renderItem.propTypes = {
  item: propTypes.shape({}).isRequired,
};
