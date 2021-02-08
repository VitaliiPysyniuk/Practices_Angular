import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostsResolver} from './services';
import {SelectedPostComponent} from "./components/selected-post/selected-post.component";

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', component: PostsComponent, resolve: {postsData: PostsResolver}, children: [
          {path: ':id', component: SelectedPostComponent}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
