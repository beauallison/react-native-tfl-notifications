const getStatus = require('./');
const fixtures = require('./fixtures');
const { LINES: { TUBE } } = require('../../constants');

describe('getStatus()', () => {
  it('should return Nothern line data', async () => {
    fetch.mockResponseOnce(JSON.stringify(fixtures.NORTHERN));

    const { status, severity } = await getStatus(TUBE.NORTHERN);
    expect(status).toBe('Good Service');
    expect(severity).toBe(10);
  });

  it('should return Waterloo City line data', async () => {
    fetch.mockResponseOnce(JSON.stringify(fixtures.WATERLOO));

    const { status, severity } = await getStatus(TUBE.WATERLOO);
    expect(status).toBe('Service Closed');
    expect(severity).toBe(20);
  });
});
