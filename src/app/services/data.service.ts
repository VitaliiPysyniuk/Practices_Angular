import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: IUser = null;
  private authorizedUser = new BehaviorSubject<IUser>(this.user);

  constructor() { }

  getAuthUser(): IUser {
    return this.authorizedUser.getValue();
  }
  setAuthUser(newUser: IUser): void {
    this.authorizedUser.next(newUser);
  }
}
