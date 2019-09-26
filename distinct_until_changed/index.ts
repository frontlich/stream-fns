import { GenericOperator } from '../type';

function distinctUntilChanged(fn: any) {

  let preValue: any[] = [], isFirstTime: boolean = true;

  const distinctFn = (...args: any[]) => {

    if (
      preValue.length !== args.length
      || isFirstTime
      || args.some((v, i) => preValue[i] !== v)
    ) {

      isFirstTime = false;
      preValue = args;

      fn(...args);

    }

  }

  return distinctFn as any;
};

export default distinctUntilChanged as GenericOperator;
