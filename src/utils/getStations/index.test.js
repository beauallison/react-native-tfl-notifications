const getStations = require('./index');
const fixtures = require('../fixtures');
const { LINES } = require('../../../constants');

describe('getStations()', () => {
  it('should return all station data', async () => {
    Object.keys(LINES).forEach(() =>
      fetch.mockResponseOnce(JSON.stringify(fixtures.WATERLOO)));

    const stations = await getStations(LINES);
    stations.forEach(({ status }) => expect(status).toBe('Service Closed'));
  });
});
