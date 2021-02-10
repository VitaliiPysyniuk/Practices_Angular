import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ICurrency} from "../models";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class BankResolver implements Resolve<ICurrency[]> {

  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20210122&json';
  private date = new Date();
  private currentDate: string;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(this.date, 'yyyyMMdd');
  }

  resolve(): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(`${this.url}?date=${this.currentDate}&json`);
  }
}
