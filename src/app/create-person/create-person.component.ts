import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Person } from '../model/person';
 
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();
  submitted = false;

  constructor(private dataService: HttpClientService ) { }

  ngOnInit(): void {}
  
    newPerson(): void {
      this.submitted = false;
      this.person = new Person();
    }

  save(){
    this.dataService.createPerson(this.person)
    .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
