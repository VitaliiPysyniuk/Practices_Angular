import { Component, OnInit } from '@angular/core';
import {ICar} from "../../../../models";
import {CarsService} from "../../../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private carsService: CarsService) {
    console.log('cars');
    this.carsService.getAllCars().subscribe(value => this.cars = value);
  }

  ngOnInit(): void {
  }

}
