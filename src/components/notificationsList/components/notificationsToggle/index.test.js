import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './index';

describe('components/notificationsList/notificationsToggle', () => {
  const props = {
    station: 'London',
    onValueChange: value => Promise.resolve(!value),
  };

  it('should render notifications toggle', () =>
    expect(shallow(<Toggle {...props} />))
      .toMatchSnapshot());

  it('should toggle switch', async () => {
    const wrapper = shallow(<Toggle {...props} />);
    wrapper.find('Switch').at(0).simulate('valueChange');

    setImmediate(() => expect(wrapper.state('enabled')).toBeTruthy());
  });

  it('should handle failed updating of notifications', async () => {
    const errorProps = { ...props };
    errorProps.onValueChange = () => Promise.reject(new Error('Error!'));

    const wrapper = shallow(<Toggle {...errorProps} />);
    wrapper.find('Switch').at(0).simulate('valueChange');

    setImmediate(() => expect(wrapper.state('enabled')).toBeFalsy());
  });
});
