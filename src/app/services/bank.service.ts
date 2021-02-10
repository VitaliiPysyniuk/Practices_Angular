import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ICurrency} from '../models';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';

  constructor(private httpClient: HttpClient) { }

  getBankCurrencies(date: string): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(this.url, {params: {date, json: 'json'}});
  }

}
