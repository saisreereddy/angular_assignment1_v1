import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.css'],
  providers: [Location]
})
export class ViewCharactersComponent implements OnInit {
allData: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }

  ngOnInit() {
    let myUrl = this._route.snapshot.paramMap.get('url');
    console.log(myUrl);
    // this.currentBlog = this.blogService.getSingleBlog(myBlogId);
    this.gotHttpService.getSingleBlog(myUrl).subscribe(

      data => {
        console.log(data);
        this.allData = [data];
        console.log(this.allData);
        // const parsed = JSON.parse(data);
        // const arr = [];
        // for (const x in parsed) {
     // if (x !== ' ') {
          // arr.push(parsed[x]);
          // }
        // }
        // this.allData = arr;
        let result = Object.keys(data).map(function(e) {
          Object.keys(data[e]).forEach(function(k) {
             if (typeof data[e][k] === 'object') {
              data[e][k] = Object.keys(data[e][k]).map(function(l){
                 return data[e][k][l];
               });
             }
          });
          return data[e];
        });
        console.log(result);
        // let evilResponseProps = Object.keys(data);
        // console.log(evilResponseProps);
       // this.allKeys = evilResponseProps;

   },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }
  goBackToPreviousPage(): any {
    this.location.back();
  }
}
