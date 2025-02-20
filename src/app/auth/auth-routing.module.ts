import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = 
[
  {path:"login",component:LoginComponent},
  
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup-routing.module').then(m => m.SignupRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
