import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {CarsService} from "../../../../services/cars.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{

  constructor(private router: Router, private carsService: CarsService) { }

  myForm = new FormGroup({
    brand: new FormControl(),
    model: new FormControl(),
    year: new FormControl()
  });
  add(form: FormGroup): void {
    this.carsService.addNewCar(form.getRawValue()).subscribe();
  }
}
