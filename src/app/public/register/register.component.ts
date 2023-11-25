import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent {

registerform: FormGroup = new FormGroup({

fname: new FormControl(null,[Validators.required,]),
lname: new FormControl(null,[Validators.required,]),
address: new FormControl(null,[Validators.required,]),
project: new FormControl(null,[Validators.required,]),
projectstart: new FormControl(null,[Validators.required,]),
projectend: new FormControl(null,[Validators.required,]),
SSN: new FormControl(null,[Validators.required,]),
visastatus: new FormControl(null,[Validators.required,]),
email: new FormControl(null,[Validators.required,Validators.email]),
password: new FormControl(null,[Validators.required,]),
passwordConfirm:new FormControl(null,[Validators.required,]),


},
{
validators: CustomValidators.passwordsMatching
});

constructor(private userService:UserService,private router:Router){}

register(){
  if (this.registerform.valid){
    this.userService.create({
      firstname: this.fname.value,
      lastname: this.lname.value,
      address: this.address.value,
      project: this.project.value,
      projstart: this.projectstart.value,
      projend: this.projectend.value,
      SSN: this.SSN.value,
      visastatus: this.visastatus.value,
      email: this.email.value,
      password: this.password.value,





    }).pipe(tap(()=> this.router.navigate(['../login'])))
    .subscribe();
  }
}

get fname():FormControl {
  return this.registerform.get('fname') as FormControl;
}
get lname():FormControl {
  return this.registerform.get('lname') as FormControl;
}
get address():FormControl{
  return this.registerform.get('address') as FormControl;
}
get project():FormControl{
  return this.registerform.get('project') as FormControl;
}
get projectstart():FormControl{
  return this.registerform.get('projectstart') as FormControl;
}
get projectend():FormControl{
  return this.registerform.get('projectend') as FormControl;
}
get SSN():FormControl{
  return this.registerform.get('SSN') as FormControl;
}
get visastatus():FormControl{
  return this.registerform.get('visastatus') as FormControl;
}

get email():FormControl{
  return this.registerform.get('email') as FormControl;
}
get password():FormControl{
  return this.registerform.get('password') as FormControl;
}
get passwordConfirm():FormControl{
  return this.registerform.get('passwordConfirm') as FormControl;
}






}
