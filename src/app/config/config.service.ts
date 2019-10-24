import { Injectable } from '@angular/core';

import { CommonService } from '../common/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient, private common: CommonService) { }


  loginAuth(service_name, params){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Method' : 'GET, POST, PUT, DELETE'
    });
    return this.http.post(this.common.serverUrl + service_name, {body : params}, {headers:headers, params:params});
  }

  logoutAuth(service_name, params){
    return this.http.get(this.common.serverUrl + service_name, {params : params})
  }
}
