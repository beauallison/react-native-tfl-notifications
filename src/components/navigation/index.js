import React from 'react';
import { TabNavigator } from 'react-navigation';

import StationList from '../stationList';
import NotificationsList from '../notificationsList';
import { getStations } from '../../utils';
import { LINES } from '../../../constants';
import store, { save } from './store';

export const LinesScreen =
  () => (<StationList onRefresh={getStations(LINES)} />);

export const NotificationScreen =
  () => (<NotificationsList data={store} save={save} />);

export default TabNavigator(
  {
    Lines: {
      screen: LinesScreen,
    },
    Notifications: {
      screen: NotificationScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);
