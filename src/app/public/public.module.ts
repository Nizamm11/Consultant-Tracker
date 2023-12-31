import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
   CommonModule,
   PublicRoutingModule,
   ReactiveFormsModule,
   MatFormFieldModule,
   MatCardModule,
   MatInputModule,
   MatButtonModule,


  ]
})
export class PublicModule { }
