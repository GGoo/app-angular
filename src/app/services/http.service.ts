import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('https://ajdu-27fe2.firebaseio.com/title.json');
  }


}
