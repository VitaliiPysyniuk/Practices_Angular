import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {IUser} from "../models";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]> {

  constructor(private service: UserService) { }

  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.service.getAllUsers();
  }
}
