import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const childrenRoutes: Routes = [
  {path: 'auth', loadChildren: () => import('./authorization/authorization.module').then(module => module.AuthorizationModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(module => module.UsersModule)},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
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
