import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  //-------
  //private readonly BASE_URL:string = 'http://localhost:8080/API/';
  private readonly BASE_URL:string = 'https://spring-app-expertos-backend.herokuapp.com/API/';
  //-------

  private readonly TAGS_URL:string = this.BASE_URL+'etiquetas';

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.get(this.TAGS_URL, {headers})
  }

  getAllTagsFilter(nameFilter:string, valueFilter:string): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.get(this.TAGS_URL+'?'+nameFilter+'='+valueFilter, {headers})
  }

  deleteTag(id:number): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.delete(this.TAGS_URL+'/'+id, {headers})
  }

  createTag(tag:{}): Observable<any> {
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.post(this.TAGS_URL, tag, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if(error.status === 400){  // 400: BadRequest
            errorMessage = 'El nombre de la etiqueta ya existe.';
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
