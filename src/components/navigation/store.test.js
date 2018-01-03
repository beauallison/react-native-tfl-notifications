import store from './store';

describe('components/navigation/store', () => {
  it('should return the notifications store', () =>
    expect(store).toMatchSnapshot());

  it('should update a station', async () => {
    const output = await store[0].onValueChange(true);
    expect(output).toBeFalsy();
  });
});
