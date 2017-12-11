import _ from 'lodash';
import { shallow } from 'enzyme';
import stationList from './index';
import { LINES } from '../../../constants';

const allStations = _.map(LINES.TUBE, (station, ID) => ({
  ID,
  station,
  status: 'Good service',
}));

describe('staionList', () => {
  it('should render a single station', () => {
    const stations = [allStations[0]];

    const wrapper = shallow(stationList({ stations }));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all stations', () => {
    const wrapper = shallow(stationList({ stations: allStations }));
    expect(wrapper).toMatchSnapshot();
  });
});
