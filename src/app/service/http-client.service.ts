import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from '../model/person';

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

  getPersonId(id:number): Observable<any>{
    return this.httpClient.get(`http://localhost:8080/persons/${id}`);
  }

  getPersonByName(name: string): Observable<any> {
    return this.httpClient.get<Person[]>(`http://localhost:8080/persons/name/${name}`);
  }

  createPerson(person: Object): Observable<Object> {
    return this.httpClient.post(`http://localhost:8080/create`, person);
  }

  updatePerson(id: number,value: any): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/persons/${id}`,value);
  }
}
