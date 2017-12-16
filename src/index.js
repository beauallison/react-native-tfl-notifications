import React from 'react';
import StationList from './components/stationList';
import { getStations } from './utils';
import { LINES } from '../constants';

export default () => (
  <StationList onRefresh={getStations(LINES.TUBE)} />
);
