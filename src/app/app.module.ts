import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { GalleryComponent } from './gallery/gallery.component';
/*import { PlanningFormComponent } from './planning-form/planning-form.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AppInfoComponent,
    GalleryComponent,
  /*  PlanningFormComponent,*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
