import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models";
import {URL} from "../app/config";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }
  getAllCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(URL.cars);
  }
  addNewCar(newCar: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(URL.cars, newCar);
  }
}
