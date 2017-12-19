const getStatus = require('./index');
const fixtures = require('../fixtures');
const { LINES } = require('../../../constants');

describe('getStatus()', () => {
  it('should return Nothern line data', async () => {
    fetch.mockResponseOnce(JSON.stringify(fixtures.NORTHERN));

    const { status, severity } = await getStatus(LINES.NORTHERN);
    expect(status).toBe('Good Service');
    expect(severity).toBe(10);
  });

  it('should return Waterloo City line data', async () => {
    fetch.mockResponseOnce(JSON.stringify(fixtures.WATERLOO));

    const { status, severity } = await getStatus(LINES.WATERLOO);
    expect(status).toBe('Service Closed');
    expect(severity).toBe(20);
  });
});
