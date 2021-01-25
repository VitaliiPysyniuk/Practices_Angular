import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getUserPosts(id): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }

}
