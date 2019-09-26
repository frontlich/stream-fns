import switchMap from './index';


test('switchMap', function () {

  jest.useFakeTimers();

  const run = switchMap((v: number) => new Promise((resolve) => {

    setTimeout(() => {
      resolve(['a', 'b', 'c'][v]);
    }, 200);

  }))((v) => {
    expect(v).toBe('c');
  });

  run(0);
  run(1);

  jest.advanceTimersByTime(200);
  run(2);

  jest.useRealTimers();

});

