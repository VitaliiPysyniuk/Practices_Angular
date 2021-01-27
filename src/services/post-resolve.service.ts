import { Injectable } from '@angular/core';
import {PostsService} from "./post.service";
import {Resolve} from "@angular/router";
import {IPost} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private service: PostsService) { }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[]{
    return this.service.getAllPosts();
  }
}
