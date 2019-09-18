export function debounceTime(dueTime: number) {

  return (fn: Function) => {

    let timer: number;

    return (...args: any[]) => {

      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(...args);
      }, dueTime);

    }
  }
}
