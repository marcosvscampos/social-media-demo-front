import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/domain/filter';
import { Credential } from 'src/app/domain/credential';
import { APIResponse } from 'src/app/domain/api-response';
import { Login } from 'src/app/domain/login';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private BASE_URL = 'http://localhost:8090';
  private CONTEXT_PATH = '/social-media/auth/api';

  constructor(private http: HttpClient) {}

  create(request:Credential): Observable<APIResponse> {
    const jsonPayload = {
      user_id: request.userId,
      credential_type: request.credentialType.toUpperCase(),
      secret_value: request.secretValue
    }

    return this.http.post<APIResponse>(this.buildUrl(), jsonPayload);
  }

  login(request:Login):Observable<APIResponse> {
    let URL = this.BASE_URL + this.CONTEXT_PATH + '/login';
    return this.http.post<APIResponse>(URL, request);
  }

  private buildUrl(filter?:Filter){
    let URL = this.BASE_URL + this.CONTEXT_PATH + '/credentials';
    
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
