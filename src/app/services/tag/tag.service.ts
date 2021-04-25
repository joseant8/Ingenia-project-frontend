import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tag } from 'src/app/models/tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private readonly TAGS_URL:string = '/API/etiquetas';

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.get(this.TAGS_URL, {headers})
  }

  deleteTag(id:number): Observable<any>{
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.delete(this.TAGS_URL+'/'+id, {headers})
  }

  //createTag(tag:Tag): Observable<any> {
  createTag(tag:{}): Observable<any> {
    let token = 'Bearer ' + localStorage.getItem('Token')
    let headers = {'Authorization':token}
    return this.http.post(this.TAGS_URL, tag, {headers})
  }
}
