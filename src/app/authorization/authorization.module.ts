import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {UsersService} from './sevices';
import {ReactiveFormsModule} from "@angular/forms";


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
