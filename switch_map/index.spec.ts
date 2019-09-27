import switchMap from './index';


test('switchMap', function (done) {

  expect.assertions(1);

  const run = switchMap((v: number) => new Promise((resolve) => {

    setTimeout(() => {
      resolve(['a', 'b', 'c'][v]);
    }, 200);

  }))((v) => {
    expect(v).toBe('c');
    done();
  });

  run(0);
  run(1);
  run(2);

});

