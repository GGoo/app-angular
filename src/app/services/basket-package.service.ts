import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Package} from "../shared/package";
import {Service} from "../shared/service";

@Injectable()
export class BasketPackageService {

  package: Package;
  private baseUrl: string = 'http://137.74.116.6/rest/users/1/package';
  //private baseUrl: string = 'https://basket-211b4.firebaseio.com/.json';

  //ID to PUT packages needs to be taken from user package
  private userPackageUrl = 'http://137.74.116.6/rest/users/1/package';


  private putUrl: string = 'http://137.74.116.6/rest/packages/1';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getData(){
    const servicesFromServer = [];
    this.http.get(`${this.baseUrl}`).subscribe(
      (data) =>{
        this.package = data.json();
        for (let key in this.package.services) servicesFromServer.push(this.package.services[key]);
      }
    )
    return servicesFromServer;
  }

  storeServices(services : Service[]){
    this.http.get(`${this.baseUrl}`).subscribe(
      (data) =>{
        this.package = data.json();
        console.log (data.json());
        for (let key in this.package.services) this.package.services[key]= services[key]}
    );
   return this.http.put(this.putUrl, this.package, this.headers ).subscribe()
  }
}
