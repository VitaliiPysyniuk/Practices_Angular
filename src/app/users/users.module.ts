import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersResolver} from './services/users.resolver';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
  ],
  providers: [
    UsersResolver
  ]
})
export class UsersModule { }
