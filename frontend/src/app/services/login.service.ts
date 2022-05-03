import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl: string = 'http://localhost:3000/api/login';

  constructor(private httpClient: HttpClient) { }

  autenticar(username: string, password: string) {
    return this.httpClient.post(`${this.baseUrl}`, { "email":username, "password":password });
  }
}
