import { debounceTime } from './index';

describe('debounceTime', function() {
  it('should be called after 100 ms', function() {
    const mockFn = jest.fn();
    const run = debounceTime(100)(mockFn); //debounce(mockFn, 100);
    jest.useFakeTimers();

    run();

    jest.runTimersToTime(50);   // 第 50 ms
    run();
    expect(mockFn).not.toHaveBeenCalled();

    jest.runTimersToTime(50);   // 第 100 ms
    expect(mockFn).not.toHaveBeenCalled();

    jest.runTimersToTime(50);   // 第 150 ms
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });
});
