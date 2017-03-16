import { Routes } from "@angular/router";
import {CategoriesStartComponent} from "./categories/categories-start.component";
import {CategoryDetailComponent} from "./categories/category-detail/category-detail.component";
import {CategoryListComponent} from "./categories/category-list.component";

export const CATEGORIES_ROUTES: Routes = [
  { path: '', component: CategoryListComponent },
  { path: ':id', component: CategoryDetailComponent }
  ];
