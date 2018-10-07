import { Pipe, PipeTransform } from '@angular/core';
import { CountryCode, isValidNumber, ParsedNumber, parseNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phoneValidation'
})
export class PhoneValidationPipe implements PipeTransform {
  transform(number: string, countryCode?: CountryCode): boolean {
    if (number) {
      let parsedNumber: ParsedNumber;
      if (countryCode) {
        parsedNumber = parseNumber(number, countryCode);
      } else {
        parsedNumber = parseNumber(number);
      }
      try {
        return isValidNumber(parsedNumber);
      } catch {
        return false;
      }
    }
    return false;
  }
}
