import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  allItems: any;
  errorMessage: any;

  constructor(private gotHttpService: GotHttpService) { }

  ngOnInit() {
    this.gotHttpService.getAllItems().subscribe(
              data => {
                console.log(data);
                this.allItems = data;
                return this.allItems;
              },
              error => {
                console.log("some error occured");
                console.log(error.errorMessage);
              }
            );




  }

}
