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
  info: string = 'posts';
  posts: IPost[];

  constructor(private activatedRouter: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    console.log(this.activatedRouter.params._value);
    if (this.activatedRouter.params._value.id) {
      this.activatedRouter.params.subscribe(value => {
        this.postsService.getUserPosts(value.id).subscribe(posts => this.posts = posts);
        this.info = `user #${value.id} posts`;
      });
    }
  }

}
