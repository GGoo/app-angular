import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BasketService {

 private baseUrl: string = 'http://137.74.116.6/rest/users/1/package';
//private baseUrl: string = 'https://basket-211b4.firebaseio.com/.json';

  constructor(private http: Http) { }

  getData(){
    return this.http.get(`${this.baseUrl}`)
  }
}
