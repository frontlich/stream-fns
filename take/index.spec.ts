import take from './index';

test('take', () => {
  const mockFn = jest.fn();
  const fn = take(2)(mockFn);

  fn();
  fn();
  fn();
  fn();

  expect(mockFn).toHaveBeenCalledTimes(2);
})
