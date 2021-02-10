import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EditUserFormComponent} from './components/edit-user-form/edit-user-form.component';
import {UsersResolver} from './services/users.resolver';
import {UsersComponent} from './components/users/users.component';

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
