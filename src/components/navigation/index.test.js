import React from 'react';
import { shallow } from 'enzyme';
import Navigation, { LinesScreen, NotificationScreen } from './index';

describe('components/navigation', () => {
  it('should render navigation', () =>
    expect(shallow(<Navigation />)).toMatchSnapshot());

  it('should render the Lines screen', () =>
    expect(shallow(LinesScreen())).toMatchSnapshot());

  it('should render the Notifications screen', () =>
    expect(shallow(NotificationScreen())).toMatchSnapshot());
});
