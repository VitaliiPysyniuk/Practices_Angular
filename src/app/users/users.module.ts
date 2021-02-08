import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UsersResolver} from "./services";
import {HttpClientModule} from "@angular/common/http";
import { EditFormComponent } from './components/edit-form/edit-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [UsersComponent, UserComponent, EditFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersResolver
  ]
})
export class UsersModule { }
