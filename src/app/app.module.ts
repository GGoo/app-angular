import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { CategoriesStartComponent } from './categories/categories-start.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryItemComponent } from './categories/category-item.component';

import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpComponent } from './services/http/http.component';
import {HttpService} from "./services/http.service";

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
    CategoriesStartComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    BlogComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent, HomepageComponent, HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [CategoryService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
