import { GenericOperator } from '../type';

export default function debounceTime(dueTime: number): GenericOperator {

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
