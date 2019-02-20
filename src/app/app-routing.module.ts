import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [{
  path: 'employee',
  component: EmployeeComponent,
  data: { title: 'List of Employee' }
},
{
  path: 'employee-details/:id',
  component: EmployeeDetailComponent,
  data: { title: 'Employee Details' }
},
{
  path: 'employee-add',
  component: EmployeeAddComponent,
  data: { title: 'Add Employee' }
},
{
  path: 'employee-edit/:id',
  component: EmployeeEditComponent,
  data: { title: 'Edit Employee' }
},
{ path: '',
  redirectTo: '/employee-add',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
