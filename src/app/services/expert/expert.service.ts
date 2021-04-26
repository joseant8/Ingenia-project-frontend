import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  private readonly EXPERTS_URL:string = '/API/expertos';
  //private readonly EXPERTS_URL:string = 'https://spring-app-expertos-backend.herokuapp.com/API/expertos';

  constructor(private http: HttpClient) { }

  // recuperar todos los expertos
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


  // recuperar un experto
  getOneExpert(id:string): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.get(this.EXPERTS_URL+'/'+id, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if(error.status === 401){  // 401: Unauthorized
            errorMessage = 'No autorizado.';
          }else if(error.status === 404){  // 404: Not Found
            errorMessage = 'No se ha encontrado el usuario en la Base de Datos';
          } else if(error.status === 504){  // 504: Gateway Timeout
            errorMessage = 'No ha sido posible conectar con el servidor de los datos. Inténtelo más tarde.';
          }

        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }



  // Editar experto. En el 'body' están los campos que se tienen que editar en el back.
  editExpert(id:number, body:any): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.put(this.EXPERTS_URL+'/'+id, body, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if(error.status === 404){  // 404: Not Found
            errorMessage = 'Error al actualizar. No se ha encontrado el usuario en la Base de Datos';
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
