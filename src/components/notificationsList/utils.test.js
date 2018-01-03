import { keyExtractor, renderItem } from './utils';

describe('components/notificationsList/utils', () => {
  describe('keyExtractor', () => {
    it('should extract a key', () =>
      expect(keyExtractor({ ID: 'TEST' })).toEqual('TEST'));
  });

  describe('renderItem', () => {
    it('should render an item', () => {
      const item = {
        station: 'London',
        onValueChange: value => Promise.resolve(!value),
      };

      const render = renderItem({ item });
      expect(render).toMatchSnapshot();
    });
  });
});
