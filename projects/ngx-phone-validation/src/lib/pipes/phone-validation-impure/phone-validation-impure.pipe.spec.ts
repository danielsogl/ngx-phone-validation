import { inject } from '@angular/core/testing';

import { PhoneValidationService } from '../../services/phone-validation/phone-validation.service';
import { PhoneValidationImpurePipe } from './phone-validation-impure.pipe';

describe('PhoneValidationImpurePipe', () => {
  it('create an instance', inject(
    [PhoneValidationService],
    (service: PhoneValidationService) => {
      const pipe = new PhoneValidationImpurePipe(service);
      expect(pipe).toBeTruthy();
    }
  ));
});
