import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardaComponent } from './Admin/dashboarda/dashboarda.component';
import { LoginComponent } from './Admin/login/login.component';
import { DashboarduserComponent } from './User/dashboarduser/dashboarduser.component';
import { HomeComponent } from './User/home/home.component';
import { SigninComponent } from './User/signin/signin.component';
import { SignupComponent } from './User/signup/signup.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dashboardu',
    component:DashboarduserComponent
  }
  ,
  {
    path:'dashboarda',
    component:DashboardaComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
