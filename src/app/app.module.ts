import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlanningFormComponent } from './planning-form/planning-form.component';
import { CategoryService } from "./services/category.service";
import { CategoryListComponent } from './categories/category-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { routing } from "./app.routing";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryItemComponent } from './categories/category-item.component';

import { BlogComponent } from './blog/blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpService } from './services/http.service';
import {OrganizationService} from "./services/organization.service";

// import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { PlannerCalendarComponent } from './plannercalendar/plannercalendar.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DndModule } from 'ng2-dnd';
import { ServiceItemComponent } from './categories/service/service-item.component';
import {ServiceService} from "./services/service.service";
import { SingleBlogComponent } from './single-blog/single-blog.component';

import { TodoComponent } from './todo/todo.component';
import { TodoDataService } from './todo/todo-data.service';

import { BasketComponent } from './basket/basket.component';
import { BasketPackageService } from './services/basket-package.service';
import { CalendarComponent } from './calendar/calendar.component';
import { BlogService } from './services/blog.service';
import { PostComponent } from './blog/post/post.component';
import { ModalcalendarComponent } from './modalcalendar/modalcalendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterPersonalComponent } from './register-personal/register-personal.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AppInfoComponent,
    GalleryComponent,
    PlanningFormComponent,
    CategoryListComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    BlogComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent, HomepageComponent,
    CalendarComponent,
    PlannerCalendarComponent,
    DragndropComponent,
    ServiceItemComponent,
    SingleBlogComponent,
    TodoComponent,
    BasketComponent,
    CalendarComponent,
    PostComponent,
    ModalcalendarComponent,
    LoginComponent,
    RegisterComponent,
    RegisterPersonalComponent,
    RegisterCompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    Ng2PageScrollModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [CategoryService, HttpService, OrganizationService, ServiceService, TodoDataService, BasketPackageService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
