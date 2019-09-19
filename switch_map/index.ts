export function switchMap<T, R, S>(convert: (data: T) => Promise<R>) {

  return (next: (v: R) => S, error?: (err: any) => any) => {

    let current: T;

    return (value: T) => {

      current = value;

      convert(value).then((res) => {

        if (value === current) {
          next(res);
        }

      }).catch(error);

    }
  }

}
