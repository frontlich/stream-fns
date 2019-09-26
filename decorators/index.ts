import debounceTime from './debounce_time';
import distinceUtilChanged from './distince_util_changed';
import switchMap from './switch_map';

export const pipe = (...operators: Function[]): MethodDecorator => {

  return (target, propertyKey, descriptor) => {

    descriptor.value = operators.reduceRight((p, c) => c(p), descriptor.value);

    return descriptor;
  }
}

export {
  debounceTime,
  distinceUtilChanged,
  switchMap
}
