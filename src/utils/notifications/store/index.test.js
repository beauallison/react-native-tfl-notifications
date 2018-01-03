import { exists, get, setup, store, update } from './index';
import { LINES } from '../../../../constants';

jest.mock('expo', () => require('./_mocks_/expo')); // eslint-disable-line global-require

describe('notifications/store()', () => {
  describe('exists()', () =>
    it('should return exists status', async () =>
      expect(await exists()).toBeFalsy()));

  describe('setup()', () =>
    it('should setup the store', async () => {
      await setup();
      expect(await get())
        .toEqual({
          bakerloo: false,
          central: false,
          circle: false,
          district: false,
          'hammersmith-city': false,
          jubilee: false,
          'london-overground': false,
          metropolitan: false,
          northern: false,
          piccadilly: false,
          victoria: false,
          'waterloo-city': false,
        });
    }));

  describe('update()', () =>
    it('should update a station', async () => {
      await update(LINES.BAKERLOO, true);
      expect(await get()).toEqual({
        bakerloo: true,
        central: false,
        circle: false,
        district: false,
        'hammersmith-city': false,
        jubilee: false,
        'london-overground': false,
        metropolitan: false,
        northern: false,
        piccadilly: false,
        victoria: false,
        'waterloo-city': false,
      });
    }));

  describe('store()', () =>
    it('should store settings', async () =>
      expect(await store(LINES)).toBeUndefined()));

  describe('get()', () =>
    it('should get settings', async () =>
      expect(await get()).toEqual(LINES)));
});
