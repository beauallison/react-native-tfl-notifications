import store, { save } from './store';

jest.mock('expo', () => require('../../utils/notifications/store/_mocks_/expo')); // eslint-disable-line global-require

describe('components/navigation/store', () => {
  it('should return the notifications store', () =>
    expect(store).toMatchSnapshot());

  it('should update a station', () =>
    expect(store[0].updateStation(true)).toBeTruthy());

  it('should save user settings', async () => {
    fetch.mockResponseOnce('OK');

    const output = await save();
    expect(output).toEqual('OK');
  });
});
