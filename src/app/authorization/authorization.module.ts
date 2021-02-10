import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthorizationRoutingModule} from './authorization-routing.module';
import {UsersService} from './sevices';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService
  ]
})
export class AuthorizationModule { }
