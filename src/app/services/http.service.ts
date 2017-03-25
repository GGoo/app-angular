import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('http://137.74.116.6:8080/packages/');
  }


}
