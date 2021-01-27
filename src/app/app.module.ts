import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import {PostResolveService, UserResolveService} from "../services";
import { FullUserComponent } from './full-user/full-user.component';

const routes: Routes = [{
  path: 'users', component: UsersComponent, resolve: {usersResolveData: UserResolveService},
  children: [ {
    path: ':userId', component: FullUserComponent, children: [{
      path: 'posts', component: PostsComponent
    }]
  }]
  }, {
  path: 'posts', component: PostsComponent, resolve: {postsResolveData: PostResolveService},
    children: []
  }, {
  path: 'home', component: AppComponent
  }, {
  path: '', redirectTo: 'home', pathMatch: 'full'
  }];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
