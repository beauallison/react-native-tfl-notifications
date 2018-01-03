import { FileSystem } from 'expo';
import { LINES } from '../../../../constants';

const path = `${FileSystem.documentDirectory}settings.json`;

module.exports.exists = () =>
  FileSystem.getInfoAsync(path)
    .then(({ exists }) => exists);

module.exports.setup = async () => {
  const stations = {};
  Object.values(LINES).forEach((station) => {
    stations[station] = false;
  });

  await exports.store(stations);
};

module.exports.update = async (ID, value) => {
  const stations = await exports.get();
  stations[ID] = value;
  await exports.store(stations);
};

module.exports.get = async () => {
  const store = await FileSystem.readAsStringAsync(path);

  return JSON.parse(store);
};

module.exports.store = async (stations) => {
  const contents = JSON.stringify(stations);

  await FileSystem.writeAsStringAsync(path, contents);
};
