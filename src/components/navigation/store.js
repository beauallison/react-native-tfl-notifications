import _ from 'lodash';
import { LINES } from '../../../constants';

export default _.map(LINES, (station, ID) => ({
  ID,
  station,
  onValueChange: (input => Promise.resolve(!input)),
}));
