import { Injectable } from '@angular/core';
import {Service} from "../shared/service";
import {Http, Response} from "@angular/http";

@Injectable()
export class ServiceService {

  private baseUrl: string = 'https://serivces-fb737.firebaseio.com/';
  services : Service [];

  constructor(private http: Http) { }

  getData(){
    const servicesFromServer = [];

    this.http.get(`${this.baseUrl}/.json`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data)=> {
        for (let key in data)
          servicesFromServer.push(data[key]);
      }
    );
    this.services = servicesFromServer;
    return servicesFromServer;
  }


}
