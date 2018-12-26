import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { ShipComponent } from './ship/ship.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Login",component:LoginComponent},
  {path:"Signup",component:SignupComponent},
  {path:"Admin/:id",component:AdminComponent},
  {path:"Customer/:id",component:CustomerComponent},
  {path:"Ship/:id",component:ShipComponent},
  {path:"Register/:id/:ship",component:RegistrationComponent},
  {path:"**",component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
