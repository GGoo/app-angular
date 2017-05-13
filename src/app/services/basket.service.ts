import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";
import {Http, Response} from "@angular/http";
import {Package} from "../shared/package";

@Injectable()
export class BasketService {

  private subscription: Subscription;

 // private baseUrl: string = 'http://137.74.116.6/rest/users/1/package';
  private baseUrl: string = 'https://package-632de.firebaseio.com/';
  package: Package;

  constructor(private http: Http) { }

  getData(){
    const packagesFromServer = [];
    this.http.get(`${this.baseUrl}/.json`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data)=> {
        console.log(data);
        this.package = data;
        for (let key in data)
          packagesFromServer.push(data[key]);
      }
    );
    //this.packages = packagesFromServer;
    return this.package;
  }

}
