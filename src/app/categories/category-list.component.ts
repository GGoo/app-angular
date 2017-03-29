import {Component, OnInit, Input} from '@angular/core';
import {Category} from "../shared";
import {CategoryService} from "../services/category.service";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})

export class CategoryListComponent implements OnInit{
  categories: Category[];
  @Input() selected = true;

  constructor(private categoryService: CategoryService){};

  ngOnInit() {
   this.categories = this.categoryService.getCategories();
   console.log("hello");
  }

  onClicked(){
    this.selected = false;
  }
}
