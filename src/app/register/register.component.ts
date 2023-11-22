import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public  user = {
    Fname:'',
    lname:'',
    address:'',
    project:'',
    projstart:'',
    projend:'',
    SSN:'',
    Visastatus:'',
    email:'',
    password:'',
     }
}
