import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://localhost:44373/users');
  }
  addUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>('https://localhost:44373/users', user);
  }
}
