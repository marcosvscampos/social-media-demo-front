import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080';
  private CONTEXT_PATH = '/social-media/api';

  constructor(private http: HttpClient) {}

  list():Observable<User[]> {
    return this.http.get<User[]>(this.buildUrl())
  }

  private buildUrl(id?: string){
    let URL = this.BASE_URL + this.CONTEXT_PATH + '/users';
    if(id){
      URL = `${URL}/${id}`;
    }
    return URL;
  }
}

