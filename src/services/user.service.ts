import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IPost, IUser} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAllUserPosts(id): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }
}
