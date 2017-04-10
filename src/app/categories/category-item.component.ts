import {Component, Input} from '@angular/core';
import {Category} from "../shared/category";


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent  {
@Input() category: Category;
@Input() categoryId: number;


constructor(){};

}
