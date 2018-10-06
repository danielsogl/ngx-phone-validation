import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { PhoneValidationConfig } from '../../interfaces/config.interface';
import { NumValidateResponse } from '../../interfaces/num-validation.interface';

@Injectable({
  providedIn: 'root'
})
export class PhoneValidationService {
  private readonly endpoint = 'https://numvalidate.com/api';

  constructor(
    @Inject('config') private config: PhoneValidationConfig,
    private http: HttpClient
  ) {}

  checkPhoneNumber(
    number: string,
    countryCode?: string
  ): Promise<NumValidateResponse> {
    let params = new HttpParams();

    // Add phone number
    params = params.append('number', number);
    // Add country code
    params = !countryCode ? params : params.append('countryCode', countryCode);

    let header = new HttpHeaders();

    // Add api key
    header = !this.config
      ? header
      : header.append('Authorization', this.config.apiKey);

    return this.http
      .get<NumValidateResponse>(`${this.endpoint}/validate`, {
        params: params,
        headers: header
      })
      .toPromise();
  }
}
