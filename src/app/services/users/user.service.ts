import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/domain/user';
import { Filter } from 'src/app/domain/filter';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080';
  private CONTEXT_PATH = '/social-media/api';

  constructor(private http: HttpClient) {}

  list(filter: Filter): Observable<User[]> {
    return this.http.get<User[]>(this.buildUrl(filter), { observe: 'response' })
    .pipe(
        map((response: HttpResponse<User[]>) => {
          if(response.status === 200) {
            if(response.body != null){
              return response.body
            }
          }
          return []
        })
      );
  }

  private buildUrl(filter:Filter){
    let URL = this.BASE_URL + this.CONTEXT_PATH + '/users';
    if(filter.id){
      URL = `${URL}/${filter.id}`;
    }

    if(filter){
      URL = URL.concat("?")
      Object.entries(filter)
        .forEach(([k, v]) => {
          if(v) {
            URL = URL.concat(`${k}=${v}`)
          }
        });  
    }

    return URL;
  }
}

