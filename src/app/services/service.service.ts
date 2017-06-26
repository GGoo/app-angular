import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class ServiceService {

  private baseUrl: string = 'http://137.74.116.6/rest/services';
  services : any [];

  constructor(private http: Http) { }

  getData(){
    const servicesFromServer = [];

    this.http.get(`${this.baseUrl}`)
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

