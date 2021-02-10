import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../../models';
import {Observable} from 'rxjs';

import {URL} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  newUser: IUser;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(URL.users);
  }
  addUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(URL.users, user);
  }
}
