import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  private readonly EXPERTS_URL:string = '/API/expertos';

  constructor(private http: HttpClient) { }

  getAllExperts(): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.get(this.EXPERTS_URL, {headers}).pipe(
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
}
