import { Pipe, PipeTransform } from '@angular/core';

import { PhoneValidationService } from '../../services/phone-validation/phone-validation.service';

@Pipe({
  name: 'phoneValidationImpure',
  pure: false
})
export class PhoneValidationImpurePipe implements PipeTransform {
  constructor(private phoneValidationService: PhoneValidationService) {}

  transform(number: string, countryCode?: string): boolean {
    if (number) {
      this.phoneValidationService
        .checkPhoneNumber(number, countryCode)
        .then(result => {
          return result.data.valid;
        })
        .catch(err => {
          return null;
        });
    }
    return null;
  }
}
