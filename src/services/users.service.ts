import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost, IUser} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }
  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUserById(id): Observable<IUser> {
    return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
