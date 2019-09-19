import { distinctUntilChanged } from './index';

test('distinctUntilChanged', () => {
  const mockFn = jest.fn();
  const fn = distinctUntilChanged(mockFn);

  fn();
  fn();
  fn(1);
  fn(1);

  expect(mockFn).toHaveBeenCalledTimes(2);
});
