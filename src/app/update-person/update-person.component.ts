import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id: number;
  person: Person;

  constructor(private route: ActivatedRoute, private router: Router,
    private dataService: HttpClientService) { }

  ngOnInit(): void {
    this.person = new Person();

    this.id = this.route.snapshot.params['id'];
    
    this.dataService.getPersonId(this.id)
      .subscribe(data => {
        console.log(data)
        this.person = data;
      }, error => console.log(error));
  }

  updatePerson(){
    this.dataService.updatePerson(this.id, this.person)
      .subscribe(data => console.log(data), error => console.log(error));
      this.person = new Person();
      this.gotoList();
  }

  onSubmit(){
    this.updatePerson();
  }

  gotoList(){
    this.router.navigate(['/persons']);
  }

}
