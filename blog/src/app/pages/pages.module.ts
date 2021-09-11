import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { MainNavigationComponent } from '../navigation/main-navigation/main-navigation.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainNavigationComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
