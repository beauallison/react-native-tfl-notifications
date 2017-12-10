const getStations = require('./index');
const fixtures = require('../fixtures');
const { LINES: { TUBE } } = require('../../../constants');

describe('getStations()', () => {
  it('should return all station data', async () => {
    Object.keys(TUBE).forEach(() =>
      fetch.mockResponseOnce(JSON.stringify(fixtures.WATERLOO)));

    const stations = await getStations(TUBE);
    stations.forEach(({ status }) => expect(status).toBe('Service Closed'));
  });
});
