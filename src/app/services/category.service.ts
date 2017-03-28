import {Injectable} from '@angular/core';
import {Category} from "../shared";
import {Organization} from "../shared/organization";
import {Address} from "../shared/address";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CategoryService {
  categories : Category[] = [];

  constructor(private http: Http) { }

  getCategories(){
    this.http.get('https://ajdutestjsonow.firebaseio.com/.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      data => {
        console.log(data);
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.categories = myArray;
      }
    );
    return this.categories;
  }

  getCategory(id: number) {
    return this.categories[id];
  }

  deleteCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1)
  }

}
