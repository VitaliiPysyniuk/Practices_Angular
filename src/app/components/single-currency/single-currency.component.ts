import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../models";

@Component({
  selector: 'app-single-currency',
  templateUrl: './single-currency.component.html',
  styleUrls: ['./single-currency.component.css']
})
export class SingleCurrencyComponent implements OnInit {

  @Input() currency: ICurrency;

  constructor() { }

  ngOnInit(): void {
  }

}
