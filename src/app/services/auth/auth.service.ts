import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_URL:string = '/API/auth/login';

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): Observable<any>{
    const body = {
      username: user.email,   //El backend usa el email como nombre de usuario
      password: user.password
    };
    // http siempre devuelve observables
    return this.http.post(this.LOGIN_URL, body).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if(error.status === 401){  // 401: Unauthorized
            errorMessage = 'No autorizado. El email y/o contraseña no son válidos.';
          }

        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  logout(){
    //localStorage.removeItem('Token');
    localStorage.clear(); // Elimina todo lo que esté en localStorage
    this.router.navigate(['/login']);
  }

  get userIsLoggedIn(): boolean{
    if(localStorage.getItem('Token')){
      return true;
    }else{
      return false;
    }
  }
}
