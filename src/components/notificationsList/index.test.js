import _ from 'lodash';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationsList from './index';
import { LINES } from '../../../constants';

describe('components/notificationsList', () => {
  const data = _.map(LINES, (station, ID) => ({
    ID,
    station,
    onPress: (() => Promise.resolve(true)),
  }));

  it('should render notifications List', () => {
    const wrapper = shallow(<NotificationsList data={data} save={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
