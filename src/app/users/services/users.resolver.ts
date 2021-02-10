import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {IUser} from '../../models';
import {URL} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(URL.users);
  }
}
