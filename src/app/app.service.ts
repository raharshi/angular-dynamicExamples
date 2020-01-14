import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<any> {
    const api = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(api);    
  }

}
