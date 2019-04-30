import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Post {
  id:number,
  userId:number,
  title:string,
  body:string
}

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  public url = 'http://jsonplaceholder.typicode.com';
  
  constructor(private _http: HttpClient) { }

  getPosts(): Observable <Post[]>{
    return this._http.get<Post[]>(`${this.url}/posts`).pipe(
      map( (res:any) => {
          return res;
      })
    );
  }

  getUsers(): Observable<any> {
    return  this._http.get(`${this.url}/users`);
  }
}
