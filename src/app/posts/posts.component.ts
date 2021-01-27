import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services";
import {IPost} from "../../models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  userId: number;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    if (activatedRoute.parent.params._value.userId) {
      activatedRoute.parent.params.subscribe(({userId}) => {
        this.userId = userId;
        usersService.getAllUserPosts(userId).subscribe(response => this.posts = response);
      });
    } else {
      activatedRoute.data.subscribe(({postsResolveData}) => this.posts = postsResolveData);
    }
  }

  ngOnInit(): void {
  }

}
