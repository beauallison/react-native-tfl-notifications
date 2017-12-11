const _ = require('lodash');
const getStatus = require('../getStatus');

module.exports = async stations =>
  Promise.all(_.keys(stations).map(async (ID) => {
    const station = stations[ID];
    const status = await getStatus(station)
      .then(res => res.status)
      .catch(() => 'Unknown');

    return {
      ID,
      station,
      status,
    };
  }));
