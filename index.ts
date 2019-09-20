export { debounceTime } from './debounce_time';
export { distinctUntilChanged } from './distinct_until_changed';
export { switchMap } from './switch_map';

export const pipe = (...operators: Function[]): MethodDecorator => {

  return (target, propertyKey, descriptor) => {

    descriptor.value = operators.reduceRight((p, c) => c(p), descriptor.value);

    return descriptor;
  }
}
