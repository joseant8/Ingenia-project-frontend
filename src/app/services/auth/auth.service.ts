import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

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
    return this.http.post(this.LOGIN_URL, body);
  }

  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('emailCurrentUser');
    this.router.navigate(['/login']);
  }
}
