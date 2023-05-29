import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee/employee.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'employee',component:EmployeeComponent},
      {path:'add-employee',component:AddEmployeeComponent},
      {path:'edit-employee',component:EditEmployeeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
