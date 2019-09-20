export function debounceTime(dueTime: number): <T extends Function>(fn: T) => T {

  return (fn) => {
    let timer: number;

    const debouncedFn = (...args: any[]) => {

      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(...args);
      }, dueTime);

    }

    return debouncedFn as any;
  };
}
