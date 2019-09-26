import _distinctUntilChanged from './index';

const distinctUntilChanged: MethodDecorator = (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {
  
  descriptor.value = _distinctUntilChanged(descriptor.value);
  
  return descriptor;
}

export default distinctUntilChanged;
