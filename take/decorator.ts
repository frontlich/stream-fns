import _take from './index';

export default function take(num: number): MethodDecorator {

  return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {

    descriptor.value = _take(num)(descriptor.value);

    return descriptor;
  }
}
