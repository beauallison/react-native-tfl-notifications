import React from 'react';
import { TabNavigator } from 'react-navigation';

import StationList from '../stationList';
import { getStations } from '../../utils';
import { LINES } from '../../../constants';

export const TubeScreen =
  () => (<StationList onRefresh={getStations(LINES.TUBE)} />);

export default TabNavigator(
  {
    Tube: {
      screen: TubeScreen,
    },
    Notifications: {
      screen: TubeScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);
