import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { PhoneValidationConfig } from './interfaces/config.interface';
import { PhoneValidationImpurePipe } from './pipes/phone-validation-impure/phone-validation-impure.pipe';
import { PhoneValidationPipe } from './pipes/phone-validation/phone-validation.pipe';
import { PhoneValidationService } from './services/phone-validation/phone-validation.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [PhoneValidationPipe, PhoneValidationImpurePipe],
  exports: [PhoneValidationPipe, PhoneValidationImpurePipe]
})
export class NgxPhoneValidationModule {
  static forRoot(config?: PhoneValidationConfig): ModuleWithProviders {
    return {
      ngModule: NgxPhoneValidationModule,
      providers: [
        PhoneValidationService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
