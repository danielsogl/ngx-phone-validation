import { Pipe, PipeTransform } from '@angular/core';
import { CountryCode, parseNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phoneValidationImpure',
  pure: false
})
export class PhoneValidationImpurePipe implements PipeTransform {
  transform(number: string, countryCode?: CountryCode): boolean {
    if (number) {
      if (countryCode) {
        return parseNumber(number, countryCode).valid;
      }
      return parseNumber(number).valid;
    }
    return null;
  }
}
