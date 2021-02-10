import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UsersResolver} from './services/users.resolver';
import {EditUserFormComponent} from './components/edit-user-form/edit-user-form.component';

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {usersDataResolve: UsersResolver}, children: [
      {path: ':id', component: EditUserFormComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
