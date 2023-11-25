import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { userI } from '../../model/user.interface';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClientModule, private snackbar:MatSnackBar) { }
  create(user:userI):Observable<userI>{
    return this.http.post<userI>('',user).pipe(
      tap((createdUser:userI)=>this.snackbar.open(`User ${createdUser.email} registerd successfully`, 'Close',
       {duration:2000,horizontalPosition:'right',verticalPosition:'top'}))
    )
  }
}
