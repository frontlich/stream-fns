export declare type GenericOperator = <T extends Function>(next: T) => T;

export interface Operator<T extends Function, F = T> extends GenericOperator {
  <E>(next: T, error?: (err: E) => any): F;
}
