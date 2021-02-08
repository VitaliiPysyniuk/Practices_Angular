import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UsersResolver} from './services/users.resolver';

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {usersResolveData: UsersResolver}, children: [
      {path: ':id', component: UserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
