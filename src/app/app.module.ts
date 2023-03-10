import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginTypeComponent } from './login-type/login-type.component';
import { MissionsOfSchoolComponent } from './missions-of-school/missions-of-school.component';
import { PrincipalsNoteComponent } from './principals-note/principals-note.component';
import { SchoolCarouselGalleryComponent } from './school-carousel-gallery/school-carousel-gallery.component';
import { SchoolNameComponent } from './school-name/school-name.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    LoginTypeComponent,
    MissionsOfSchoolComponent,
    PrincipalsNoteComponent,
    SchoolNameComponent,
    SchoolCarouselGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
