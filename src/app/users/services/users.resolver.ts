import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IUser} from "../../models";
import {HttpClient} from "@angular/common/http";
import {URL} from "../../config";

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
