import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlannerCalendarComponent } from './plannercalendar/plannercalendar.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { BasketComponent } from './basket/basket.component';
import { BlogComponent } from './blog/blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterPersonalComponent } from './register-personal/register-personal.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';

import { CATEGORIES_ROUTES } from './categories.routes';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'logowanie', component: LoginComponent, pathMatch: 'full' },
  { path: 'rejestracja', component: RegisterComponent, pathMatch: 'full' },
  { path: 'rejestracja/konto-osobiste', component: RegisterPersonalComponent, pathMatch: 'full' },
  { path: 'rejestracja/konto-firmowe', component: RegisterCompanyComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent, children: CATEGORIES_ROUTES },
  { path: 'calendar', component: PlannerCalendarComponent },
  { path: 'dragndrop', component: DragndropComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'blog', component: BlogComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
