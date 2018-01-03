import register from './';
import { LINES } from '../../../../constants';

describe('notifications/update()', () => {
  it('should register a users notifications', async () => {
    fetch.mockResponseOnce('OK');

    const result = await register([LINES.BAKERLOO]);
    expect(result).toBe('OK');
  });
});
