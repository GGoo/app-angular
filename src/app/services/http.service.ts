import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('https://ajdutestjsonow.firebaseio.com/.json ')
      .map((response: Response) => response.json());
  }


}
