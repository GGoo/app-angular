import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AppInfoComponent,
    GalleryComponent,
    PlanningFormComponent,
    CategoryListComponent,
    CategoriesComponent,
    CategoriesStartComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
