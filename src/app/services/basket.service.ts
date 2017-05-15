import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";
import {Http, Response} from "@angular/http";
import {Package} from "../shared/package";

@Injectable()
export class BasketService {

 private baseUrl: string = 'http://137.74.116.6/rest/users/1/package';
//private baseUrl: string = 'https://basket-211b4.firebaseio.com/.json';
  package: Package;

  constructor(private http: Http) { }

  getData(){

    this.http.get(`${this.baseUrl}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data)=> {
        console.log(data);
        this.package = data;
        console.log(this.package);
      }
    );


    return this.package;
  }

}
