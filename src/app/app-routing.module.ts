import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent 
  },
  { 
    path: 'login', component: LoginComponent 
  },
  {
    path:"restore-password",component:RestorePasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }