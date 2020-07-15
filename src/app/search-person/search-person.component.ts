import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../service/http-client.service';
import { Person } from '../model/person'

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})


export class SearchPersonComponent implements OnInit {

  name: string;
  person: Person[];
  
  constructor(private dataService: HttpClientService) { }

  ngOnInit(): void {
    this.name = null;
  }
   private searchPerson(){
     this.dataService.getPersonByName(this.name)
      .subscribe(person => this.person = person);
   }

   onSubmit(){
     this.searchPerson();
   }
}
