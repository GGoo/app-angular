import {Injectable} from '@angular/core';
import {Category} from "../shared";

import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Subscription} from "rxjs";

@Injectable()
export class CategoryService {
  private subscription: Subscription;
  private baseUrl: string = 'https://ajdutestjsonow.firebaseio.com';
  categories : Category[];

  constructor(private http: Http) { }

  getData(){
    const categoriesFromServer = [];
    // this.http.get(`${this.baseUrl}/${this.id}.json`)
    this.http.get(`${this.baseUrl}/.json`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data)=> {
        for (let key in data)
          categoriesFromServer.push(data[key]);
      }
    );
    this.categories = categoriesFromServer;
    return categoriesFromServer;
  }

  getCategory(id: number) {
    return this.categories[id];
  }

  deleteCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1)
  }

}
