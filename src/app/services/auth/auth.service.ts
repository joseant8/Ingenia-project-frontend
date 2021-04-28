import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Register } from 'src/app/models/register/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //-------
  //private readonly BASE_URL:string = 'http://localhost:8080/API/';
  private readonly BASE_URL:string = 'https://spring-app-expertos-backend.herokuapp.com/API/';
  //-------

  private readonly LOGIN_URL:string = this.BASE_URL+'auth/login';
  private readonly REGISTER_URL:string = this.BASE_URL+'auth/signup';

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): Observable<any>{
    const body = {
      username: user.email,   //El backend usa el email como nombre de usuario
      password: user.password
    };
    // http siempre devuelve observables
    return this.http.post(this.LOGIN_URL, body).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if(error.status === 401){  // 401: Unauthorized
            errorMessage = 'No autorizado. El email y/o contraseña no son válidos.';
          } else if(error.status === 504){  // 504: Gateway Timeout
            errorMessage = 'No ha sido posible conectar con el servidor de los datos. Inténtelo más tarde.';
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

  register(register: Register): Observable<any>{
    const body = register;
    // http siempre devuelve observables
    return this.http.post(this.REGISTER_URL, body).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if(error.status === 400){  // 400: BadRequest
            errorMessage = 'No se ha podido registrar. El email introducido ya está registrado.';
          }else if(error.status === 504){  // 504: Gateway Timeout
            errorMessage = 'No ha sido posible conectar con el servidor de los datos. Inténtelo más tarde.';
          }

        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  get userIsLoggedIn(): boolean{
    if(localStorage.getItem('Token')){
      return true;
    }else{
      return false;
    }
  }
}
