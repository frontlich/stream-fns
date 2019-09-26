export const compose = (...operators: Function[]) => <T>(fn: T): T => {
 
  return operators.reduceRight((p, c) => c(p), fn);
}

export const pipe = (...operators: Function[]): MethodDecorator => {

  return (target, propertyKey, descriptor) => {

    descriptor.value = compose(...operators)(descriptor.value);

    return descriptor;
  }
}
