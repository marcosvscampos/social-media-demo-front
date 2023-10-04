import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyPair } from 'src/app/domain/key-pair';
import { APIResponse } from 'src/app/domain/api-response';
import { Filter } from 'src/app/domain/filter';

@Injectable({
  providedIn: 'root'
})
export class KeypairService {

  private BASE_URL = 'http://localhost:8090';
  private CONTEXT_PATH = '/social-media/auth/api';

  constructor(private http: HttpClient) {}

  create(request:KeyPair): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.buildUrl(), request);
  }

  getById(contextPath:string): Observable<KeyPair> {
    return this.http.get<KeyPair>(this.buildUrlWithContextPath(contextPath));
  }

  getByUserId(userId:string): Observable<KeyPair> {
    let URL = `${this.BASE_URL}${this.CONTEXT_PATH}/users/${userId}/keys`;
    return this.http.get<KeyPair>(URL);
  }

  private buildUrlWithContextPath(contextPath:string) {
    let URL = this.BASE_URL;
    if(contextPath){
      URL = `${URL}${contextPath}`;
    }
    return URL;
  }

  private buildUrl(filter?:Filter){
    let URL = this.BASE_URL + this.CONTEXT_PATH + '/keys';
    
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
