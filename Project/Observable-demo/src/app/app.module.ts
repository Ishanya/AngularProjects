import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpSerService } from './emp-ser.service';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpDetailComponent,
    EmpListComponent,
    EmpSalaryComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
