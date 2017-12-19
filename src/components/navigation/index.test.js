import React from 'react';
import { shallow } from 'enzyme';
import Navigation, { LinesScreen } from './index';

describe('components/navigation', () => {
  it('should render navigation', () =>
    expect(shallow(<Navigation />)).toMatchSnapshot());

  it('should render the Lines screen', () =>
    expect(shallow(LinesScreen())).toMatchSnapshot());
});
