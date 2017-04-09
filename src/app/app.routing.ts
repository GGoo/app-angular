import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CATEGORIES_ROUTES } from './categories.routes';
import { PlannerCalendarComponent } from './plannercalendar/plannercalendar.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'categories', component: CategoriesComponent, children: CATEGORIES_ROUTES },
  { path: 'calendar', component: PlannerCalendarComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
