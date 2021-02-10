import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {IUser} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private authorizedUser = new BehaviorSubject<IUser>(null);
  private updatedUser = new BehaviorSubject<IUser>(null);

  constructor() { }

  getAuthUser(): BehaviorSubject<IUser> {
    return this.authorizedUser;
  }
  setAuthUser(newUser: IUser): void {
    this.authorizedUser.next(newUser);
  }

  getUpdatedUser(): BehaviorSubject<IUser> {
    return this.updatedUser;
  }

  setUpdatedUser(updatedUser: IUser): void {
    this.updatedUser.next(updatedUser);
  }
}
