import { PhoneValidationPipe } from './phone-validation.pipe';

describe('PhoneValidationPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneValidationPipe();
    expect(pipe).toBeTruthy();
  });
});
