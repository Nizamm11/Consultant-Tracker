import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { userI } from '../../model/user.interface';
import { Observable,throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

 
  create(userI: userI): Observable<userI> {
    return this.http.post<userI>('https://fitness-web-23eeb-default-rtdb.firebaseio.com/signup-users.json ', userI).pipe(
      tap((createdUser: userI) => this.snackbar.open(`User ${createdUser.email} created successfully`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
      catchError(e => {
        this.snackbar.open(`Unsuccessful registration,due to: ${e.error.message}`, 'Close', {
          duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
        })
        return throwError(e);
      })
    )
  }
}