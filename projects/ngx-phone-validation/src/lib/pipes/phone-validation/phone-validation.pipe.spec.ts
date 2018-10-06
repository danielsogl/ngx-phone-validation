import { inject } from '@angular/core/testing';

import { PhoneValidationService } from '../../services/phone-validation/phone-validation.service';
import { PhoneValidationPipe } from './phone-validation.pipe';

describe('PhoneValidationPipe', () => {
  it('create an instance', inject(
    [PhoneValidationService],
    (service: PhoneValidationService) => {
      const pipe = new PhoneValidationPipe(service);
      expect(pipe).toBeTruthy();
    }
  ));
});
