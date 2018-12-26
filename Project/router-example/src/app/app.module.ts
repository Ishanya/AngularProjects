import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, comp } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptContentComponent } from './dept-content/dept-content.component';
import { DeptContent2Component } from './dept-content2/dept-content2.component';
import { DeptContent3Component } from './dept-content3/dept-content3.component';
import { DeptContent4Component } from './dept-content4/dept-content4.component';


@NgModule({
  declarations: [
    AppComponent,
    comp,
    HomeComponent,
    DeptDetailsComponent,
    DeptContentComponent,
    DeptContent2Component,
    DeptContent3Component,
    DeptContent4Component
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
