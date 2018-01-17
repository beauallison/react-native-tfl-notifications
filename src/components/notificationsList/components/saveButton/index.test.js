import React from 'react';
import { shallow } from 'enzyme';
import SaveButton from './index';

describe('components/notificationsList/SaveButton', () =>
  it('should render save button', () =>
    expect(shallow(<SaveButton onPress={() => { }} />))
      .toMatchSnapshot()));
