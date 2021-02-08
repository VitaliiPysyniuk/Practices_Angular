import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const childrenRoutes: Routes = [
  {path: 'auth', loadChildren: () => import('./authorization/authorization.module').then(module => module.AuthorizationModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(module => module.UsersModule)},
  {path: 'services', loadChildren: () => import('./bank-services/bank-services.module').then(module => module.BankServicesModule)},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

const routes: Routes = [
  {path: '', children: childrenRoutes}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
