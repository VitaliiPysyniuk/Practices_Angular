import { Component, OnInit } from '@angular/core';
import {BankService} from '../../services';
import {ICurrency} from '../../models';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-all-currencies',
  templateUrl: './all-currencies.component.html',
  styleUrls: ['./all-currencies.component.css']
})
export class AllCurrenciesComponent implements OnInit {

  allCurrencies: ICurrency[];
  currentDate = new Date();

  constructor(private bankService: BankService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.bankService.getBankCurrencies(this.dateFormatter(this.currentDate, 1)).subscribe(value => this.allCurrencies = value);
  }

  changeDate(): void {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1));
    this.ngOnInit();
  }

  dateFormatter(date: Date, type: number): string {
    switch (type) {
      case 1:
        return this.datePipe.transform(date, 'yyyyMMdd');
      case 2:
        return this.datePipe.transform(date, 'dd-MM-yyyy');
      default:
        return this.datePipe.transform(date, 'yyyyMMdd');
    }
  }

}
