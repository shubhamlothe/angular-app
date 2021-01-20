import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { NoticeComponent } from './notice/notice.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ViewProfileComponent },
  { path: 'userHomepage', component: UserHomePageComponent },
  { path: 'updateNotice', component: NoticeComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'result', component: ResultComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
