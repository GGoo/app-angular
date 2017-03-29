import {Injectable} from '@angular/core';
import {Category} from "../shared";
import {Organization} from "../shared/organization";
import {Address} from "../shared/address";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CategoryService {
   categories : Category[];

  constructor(private http: Http) { }

  getData(){
  const categoriesFromServer = [];
    this.http.get('https://ajdutestjsonow.firebaseio.com/.json')
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
