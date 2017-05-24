import {Injectable} from '@angular/core';
import {Category} from "../shared";

import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class CategoryService {

  private baseUrl: string = 'http://137.74.116.6/rest/categories';
 // private baseUrl: string = 'https://ajdutestjsonow.firebaseio.com/.json';
  categories : Category[];

  constructor(private http: Http) { }

  getData(){
    const categoriesFromServer = [];
    this.http.get(`${this.baseUrl}`)
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
