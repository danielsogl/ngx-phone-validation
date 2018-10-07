import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhoneValidationImpurePipe } from './pipes/phone-validation-impure/phone-validation-impure.pipe';
import { PhoneValidationPipe } from './pipes/phone-validation/phone-validation.pipe';

@NgModule({
  imports: [HttpClientModule],
  declarations: [PhoneValidationPipe, PhoneValidationImpurePipe],
  exports: [PhoneValidationPipe, PhoneValidationImpurePipe]
})
export class NgxPhoneValidationModule {}
