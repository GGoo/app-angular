import { Component, OnInit } from '@angular/core';
import {Category} from "../shared/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
  selectedCategory: Category;

  constructor() { }

  ngOnInit() {
  }

}
