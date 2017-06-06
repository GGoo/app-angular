import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Organization} from "../shared/organization";

@Injectable()
export class OrganizationService {

  private baseUrl: string = 'https://organization-b3486.firebaseio.com/';

  private id: number = 1;
  organizations : Organization [];

  constructor(private http: Http) { }

  getData(){
    const organizationsFromServer = [];
    // this.http.get(`${this.baseUrl}/${this.id}.json`)
    this.http.get(`${this.baseUrl}/.json`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data)=> {
        for (let key in data)
          organizationsFromServer.push(data[key]);
      }
    );
    this.organizations = organizationsFromServer;
    return organizationsFromServer;
  }

  getOrganization(id: number) {
    return this.organizations[id];
  }
}
