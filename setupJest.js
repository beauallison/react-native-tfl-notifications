/* eslint-disable import/no-extraneous-dependencies */
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
