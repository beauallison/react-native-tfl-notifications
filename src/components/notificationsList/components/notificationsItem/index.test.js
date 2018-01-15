import React from 'react';
import { shallow } from 'enzyme';
import NotificationsItem from './index';

describe('components/notificationsList/notificationsItem', () => {
  const props = {
    station: 'London',
    updateStation: () => { },
  };

  it('should render notifications checkbox', () =>
    expect(shallow(<NotificationsItem {...props} />))
      .toMatchSnapshot());

  it('should toggle checkbox', async () => {
    const wrapper = shallow(<NotificationsItem {...props} />);
    wrapper.find('CheckBox').at(0).simulate('press');

    setImmediate(() => expect(wrapper.state('enabled')).toBeTruthy());
  });
});
