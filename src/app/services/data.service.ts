import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IPost} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedPost = new BehaviorSubject<IPost>(null);

  constructor() { }

  getSelectedPost(): BehaviorSubject<IPost> {
    return this.selectedPost;
  }
  setSelectedPost(post: IPost): void {
    this.selectedPost.next(post);
  }
}
