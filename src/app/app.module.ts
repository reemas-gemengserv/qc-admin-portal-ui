import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ActivityComponent } from './activity/activity.component';
import { MriReportComponent } from './mri-report/mri-report.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddProjectComponent,
    DashboardComponent,
    AddUserComponent,
    AddCompanyComponent,
    ActivityComponent,
    MriReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
