import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App', () => {
  it('should render', async () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
