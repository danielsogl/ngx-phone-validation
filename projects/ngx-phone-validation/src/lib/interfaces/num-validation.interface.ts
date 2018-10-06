export interface NumValidateData {
  valid: boolean;
  number: string;
  e164Format: string;
  internationalFormat: string;
  nationalFormat: string;
  countryCode: string;
  countryPrefix: string;
  countryName: string;
}

export interface NumValidateResponse {
  data: NumValidateData;
}
