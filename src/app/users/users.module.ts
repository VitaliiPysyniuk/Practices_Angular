import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersResolver} from './services/users.resolver';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {MatIconModule} from '@angular/material/icon';
import {UsersService} from './services';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UserComponent, UsersComponent, EditUserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsersResolver,
    UsersService
  ]
})
export class UsersModule { }
