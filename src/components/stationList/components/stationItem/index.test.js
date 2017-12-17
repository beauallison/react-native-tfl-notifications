import React from 'react';
import { shallow } from 'enzyme';
import StationItem from './index';

describe('components/stationList/components/stationItem', () => {
  it('should render a stationItem', async () => {
    const wrapper = shallow(<StationItem station="bakerloo" status="Good Service" />);

    expect(wrapper).toMatchSnapshot();
  });
});
