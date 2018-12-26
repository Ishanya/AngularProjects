import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login-service.service';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ShipComponent } from './ship/ship.component';
import { RouteComponent } from './route/route.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CustomerComponent } from './customer/customer.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ShipComponent,
    RouteComponent,
    ScheduleComponent,
    CustomerComponent,
    RegistrationComponent,
    HomeComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
