import React from 'react';
import { shallow } from 'enzyme';
import Navigation, { TubeScreen } from './index';

describe('components/navigation', () => {
  it('should render navigation', () =>
    expect(shallow(<Navigation />)).toMatchSnapshot());

  it('should render the Tube screen', () =>
    expect(shallow(TubeScreen())).toMatchSnapshot());
});
