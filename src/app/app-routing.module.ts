import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from 'src/shared/auth.guard';
import { AuthenticatorComponent } from './views/authenticator/authenticator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AuthenticatorComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }