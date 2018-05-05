import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class GotHttpService {
  private baseUrl = 'https://www.anapioficeandfire.com/api';
  constructor(private _http: HttpClient) {
    console.log("BlogHttpService is called")
      }
      private handleError(err: HttpErrorResponse) {
        console.log("Handle error Http calls")
        console.log(err.message);
        return Observable.throw(err.message);
      }
      getAllItems(): any {
            let myResponse = this._http.get(this.baseUrl + '/books' );
            return myResponse;
          }// end get all blogs

}
