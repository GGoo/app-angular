import {Component, OnInit, Input } from '@angular/core';
import {Category} from "../shared";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})

export class CategoryListComponent implements OnInit{
  categories: Array<Category>;
  @Input() unselected = true;

  constructor(private categoryService: CategoryService){};

  ngOnInit() {
   this.categories = this.categoryService.getData();
  }

  onClicked(){
    this.unselected = false;
  }
}
