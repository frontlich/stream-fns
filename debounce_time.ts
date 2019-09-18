export function debounceTime(dueTime: number) {

  return (fn: Function) => {

    let timer: number;

    return <T>(data: T) => {

      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(data);
      }, dueTime);

    }
  }
}
