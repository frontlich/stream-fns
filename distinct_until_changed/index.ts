export function distinctUntilChanged<T>(fn: (v?: T) => any) {

  let preValue: any, isFirstTime: boolean = true;

  return (value?: T) => {

    if (preValue !== value || isFirstTime) {

      isFirstTime = false;
      preValue = value;

      fn(value);

    }

  }
};
