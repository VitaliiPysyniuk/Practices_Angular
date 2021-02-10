import { Component } from '@angular/core';

import {BankService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practices Angular';

  constructor(private bankService: BankService) {
  }

  get(): void {
    this.bankService.getBankCurrencies('1212').subscribe(value => console.log(value));
  }
}
