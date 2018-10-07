import { PhoneValidationImpurePipe } from './phone-validation-impure.pipe';

describe('PhoneValidationImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneValidationImpurePipe();
    expect(pipe).toBeTruthy();
  });
});
