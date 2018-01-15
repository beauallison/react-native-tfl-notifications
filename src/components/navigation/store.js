import _ from 'lodash';
import { LINES } from '../../../constants';
import { store, update } from '../../utils/notifications';

let Store = {};

(async () => {
  const exists = await store.exists();
  if (!exists) { await store.setup(); }
  Store = await store.get();
})();

const updateStation = (station, status) => {
  Store[station] = status;
  return status;
};

export default _.map(LINES, (station, ID) => ({
  ID,
  station,
  enabled: Store[station],
  updateStation: input => updateStation(station, input),
}));

export const save = () => update(Store);
