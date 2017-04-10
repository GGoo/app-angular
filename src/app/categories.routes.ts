import { Routes } from "@angular/router";

import {CategoryDetailComponent} from "./categories/category-detail/category-detail.component";
import {CategoryListComponent} from "./categories/category-list.component";
import {SERVICES_ROUTES} from "./services.routes";

export const CATEGORIES_ROUTES: Routes = [
  { path: '', component: CategoryListComponent },
  { path: ':id', component: CategoryDetailComponent, children: SERVICES_ROUTES }
  ];
