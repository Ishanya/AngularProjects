import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserValueComponent } from './user-value/user-value.component';
import { EmpEnterComponent } from './emp-enter/emp-enter.component';
import { EmpPrintComponent } from './emp-print/emp-print.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserValueComponent,
    EmpEnterComponent,
    EmpPrintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
