import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CATEGORIES_ROUTES } from './categories.routes';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'categories', component: CategoriesComponent, children: CATEGORIES_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
