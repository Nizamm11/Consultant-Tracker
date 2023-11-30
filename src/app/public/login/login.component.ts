import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
loginForm: FormGroup =  new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,]),

})

login(){};

get email():FormControl{
  return this.loginForm.get('email') as FormControl;
}
get password():FormControl{
  return this.loginForm.get('password') as FormControl;
}
}


