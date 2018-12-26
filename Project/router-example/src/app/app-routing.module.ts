import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DeptComponent } from './dept/dept.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptContentComponent } from './dept-content/dept-content.component';
import { DeptContent2Component } from './dept-content2/dept-content2.component';
import { DeptContent3Component } from './dept-content3/dept-content3.component';
import { DeptContent4Component } from './dept-content4/dept-content4.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dept",component:DeptComponent},
  {path:"employee-detail",component:EmployeeDetailComponent},
  {path:"dept-detail/:id",component:DeptDetailsComponent},
  {path:"dept-content1/:id",component:DeptContentComponent},
  {path:"dept-content2/:id",component:DeptContent2Component},
  {path:"dept-content3/:id",component:DeptContent3Component},
  {path:"dept-content4/:id",component:DeptContent4Component},
  {path:"**",component:DefaultComponent}    //must be last entry
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const comp=[DeptComponent,EmployeeDetailComponent,DefaultComponent,DeptDetailsComponent,DeptContentComponent,DeptContent2Component,DeptContent3Component,DeptContent4Component]