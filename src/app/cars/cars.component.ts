import {Component} from '@angular/core';
import {cars} from '../../database/CarsDatabase';
import {ICar} from '../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: ICar[] = cars;
}
