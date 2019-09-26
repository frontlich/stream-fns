import _switchMap from './index';

export default function switchMap<V>(convert: (...argus: any[]) => Promise<V>): MethodDecorator {

  return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {

    descriptor.value = _switchMap(convert)(descriptor.value);

    return descriptor;
  }
}
