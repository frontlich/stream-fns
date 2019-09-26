import debounceTime from './debounce_time';
import distinctUntilChanged from './distinct_until_changed';
import switchMap from './switch_map';

export const compose = (...operators: Function[]) => <T>(fn: T): T => {
  return operators.reduceRight((p, c) => c(p), fn);
}

export {
  debounceTime,
  distinctUntilChanged,
  switchMap
}
