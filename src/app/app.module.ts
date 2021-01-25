import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { FullUserComponent } from './full-user/full-user.component';
import { ShortUserComponent } from './short-user/short-user.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    FullUserComponent,
    ShortUserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'users', component: UsersComponent, children: [{
        path: ':id/posts', component: PostsComponent
      }, {
        path: ':id', component: FullUserComponent, children: [{
          path: 'posts', component: PostsComponent
        }]
      }]
    }, {
      path: 'posts', component: PostsComponent
    }
    // ,
    //   {
    //   path: '', component: AppComponent, pathMatch: 'full'
    // },
    //   {
    //   path: '**', redirectTo: '', component: AppComponent
    // }
        ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
