export function switchMap<T, R, S>(convert: (data: T) => Promise<R>) {

  return (fn: (v: R) => S) => {

    let current: T;

    return (value: T) => {

      current = value;

      convert(value).then((res) => {

        if (value === current) {
          fn(res);
        }

      });

    }
  }

}
