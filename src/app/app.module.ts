import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { AllCurrenciesComponent } from './components/all-currencies/all-currencies.component';
import { SingleCurrencyComponent } from './components/single-currency/single-currency.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AllCurrenciesComponent,
    SingleCurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
