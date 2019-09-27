import { GenericOperator } from '../type';

export default function take(num: number): GenericOperator {

  let hasTakeNum = 0;

  return (fn) => {

    const takeFn = (...args: any[]) => {
      
      if (hasTakeNum < num) {
        
        hasTakeNum++;
        
        fn(...args);
      }
    }

    return takeFn as any;
  };
}
