import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPhoneValidationModule } from '../../projects/ngx-phone-validation/src/lib/ngx-phone-validation.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPhoneValidationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
