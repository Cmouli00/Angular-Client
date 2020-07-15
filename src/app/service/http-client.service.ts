import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export class Person{
  constructor(
    public id:string,
    public name:string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private httpClient:HttpClient
  ) { 
     }

  getPerson()
  {
    console.log("test call");
    return this.httpClient.get<Person[]>('http://localhost:8080/persons');
  }

  getPersonByName(name: string): Observable<any> {
    return this.httpClient.get<Person[]>(`http://localhost:8080/persons/name/${name}`);
  }
}
