import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../models';
import {URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(URL.users);
  }

  updateUser(updatedUser): Observable<IUser> {
    return this.httpClient.put<IUser>(URL.users, updatedUser);
  }

  deleteUser(Id): Observable<{}> {
    return this.httpClient.delete(`${URL.users}/${Id}`);
  }
}
