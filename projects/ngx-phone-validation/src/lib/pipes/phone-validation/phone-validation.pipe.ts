import { Pipe, PipeTransform } from '@angular/core';

import { PhoneValidationService } from '../../services/phone-validation/phone-validation.service';

@Pipe({
  name: 'phoneValidation'
})
export class PhoneValidationPipe implements PipeTransform {
  constructor(private phoneValidationService: PhoneValidationService) {}

  transform(number: string, countryCode?: string): boolean {
    if (number) {
      this.phoneValidationService
        .checkPhoneNumber(number, countryCode)
        .then(result => {
          console.log(result);
          return result.data.valid;
        })
        .catch(err => {
          console.log(err);
          return null;
        });
    }
    return null;
  }
}
