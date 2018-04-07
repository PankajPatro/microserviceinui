import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user.model'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  login(userName: string, password: string) : Observable<User>{
    let apiUrl = '/api/login/'+ userName + '/' + password;
    return this.http.get<User>(apiUrl);
  }

}
