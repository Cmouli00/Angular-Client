import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person:string[];
  show:boolean;

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getPerson().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
{
    this.person=response;
}


}
