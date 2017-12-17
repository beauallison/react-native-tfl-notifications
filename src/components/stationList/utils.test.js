import { keyExtractor, renderItem } from './utils';

describe('components/stationList/utils', () => {
  describe('keyExtractor', () => {
    it('should extract a key', () =>
      expect(keyExtractor({ ID: 'TEST' })).toEqual('TEST'));
  });

  describe('renderItem', () => {
    it('should render an item', () => {
      const render = renderItem({ item: { station: 'bakerloo', status: 'Good Service' } });

      expect(render).toMatchSnapshot();
    });
  });
});
