import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://localhost:44373/users');
  }

  updateUser(updatedUser): Observable<IUser> {
    return this.httpClient.put<IUser>('https://localhost:44373/users', updatedUser);
  }

  deleteUser(Id): Observable<{}> {
    console.log('delete ' + `https://localhost:44373/users/${Id}`);
    return this.httpClient.delete(`https://localhost:44373/users/${Id}`);
  }
}
