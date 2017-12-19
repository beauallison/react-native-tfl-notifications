import React from 'react';
import { TabNavigator } from 'react-navigation';

import StationList from '../stationList';
import { getStations } from '../../utils';
import { LINES } from '../../../constants';

export const LinesScreen =
  () => (<StationList onRefresh={getStations(LINES)} />);

export default TabNavigator(
  {
    Lines: {
      screen: LinesScreen,
    },
    Notifications: {
      screen: LinesScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);
