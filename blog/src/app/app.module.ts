import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainNavigationComponent,
    AdminNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
