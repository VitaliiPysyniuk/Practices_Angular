import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services";
import {IPost} from "../../models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userId: number;
  info: string = 'posts';
  posts: IPost[];

  constructor(private activatedRouter: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    if ( this.activatedRouter.params._value.id) {
      this.activatedRouter.params.subscribe(value => {
        this.postsService.getUserPosts(value.id).subscribe(value1 => this.posts = value1);
        this.info = `user #${value.id} posts`;
        this.postsService.getUserPosts(this.userId).subscribe(response => this.posts = response);
      });
    }
  }

}
