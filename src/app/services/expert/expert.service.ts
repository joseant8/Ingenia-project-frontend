import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  private readonly EXPERTS_URL:string = '/API/expertos';

  constructor(private http: HttpClient) { }

  getAllExperts(): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.get(this.EXPERTS_URL, {headers})
  }
}
