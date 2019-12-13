import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ActivityComponent } from './activity/activity.component';
import { MriReportComponent} from './mri-report/mri-report.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'addCompany', component: AddCompanyComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'mriReport' , component:MriReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
