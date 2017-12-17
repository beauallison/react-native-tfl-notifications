import _ from 'lodash';
import React from 'react';
import { shallow } from 'enzyme';
import StationList from './index';
import { LINES } from '../../../constants';

const allStations = _.map(LINES.TUBE, (station, ID) => ({
  ID,
  station,
  status: 'Good service',
}));

describe('components/stationList', () => {
  it('should render a flatList', async () => {
    const onRefresh = Promise.resolve([allStations[0]]);
    const wrapper = shallow(<StationList data={allStations} onRefresh={onRefresh} />);

    const flatList = wrapper.find('FlatList').get(0);
    await flatList.props.onRefresh();

    expect(flatList).toMatchSnapshot();
  });
});
