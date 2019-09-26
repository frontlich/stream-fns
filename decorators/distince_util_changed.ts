import _distinctUntilChanged from '../distinct_until_changed/index';

const distinctUntilChanged: MethodDecorator = (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {
  
  descriptor.value = _distinctUntilChanged(descriptor.value);
  
  return descriptor;
}

export default distinctUntilChanged;
