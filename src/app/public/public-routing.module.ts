import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../public/login/login.component';
import { RegisterComponent } from '../public/register/register.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
   path:'register',
   component:RegisterComponent

  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
