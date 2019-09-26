import _debounceTime from '../debounce_time/index';

export default function debounceTime(dueTime: number): MethodDecorator {

  return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {

    descriptor.value = _debounceTime(dueTime)(descriptor.value);

    return descriptor;
  }
}
