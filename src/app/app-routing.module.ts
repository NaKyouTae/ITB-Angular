import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/menu/dashboard/dashboard.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"main", component: MainComponent, children:[
    {path:'dashboard', component: DashboardComponent}
  ]}
];

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});