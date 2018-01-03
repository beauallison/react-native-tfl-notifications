import React from 'react';
import propTypes from 'prop-types';
import NotificationsToggle from './components/notificationsToggle';

export const keyExtractor = item => item.ID;

export const renderItem = ({ item }) => ((<NotificationsToggle {...item} />));

renderItem.propTypes = {
  item: propTypes.shape({}).isRequired,
};
