import {Routes, RouterModule} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {AppInfoComponent} from "./app-info/app-info.component";
import {CATEGORIES_ROUTES} from "./categories.routes";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: AppInfoComponent },
  { path: 'categories', component: CategoriesComponent, children: CATEGORIES_ROUTES },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
