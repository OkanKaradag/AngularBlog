import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes =
[
  //www.blabla.com/
  {
    path : "",
    component : MainLayoutComponent,
    // The routing structure of the components in the main layout
    children :
    [
      //www.blabla.com/ -> Main component in the layout
      {
        path : "",
        component : HomeComponent
      },
      //www.blabla.com/about-me
      {
        path : "about-me",
        component : AboutMeComponent
      },
      //www.blabla.com/contact
      {
        path : "contact",
        component : ContactComponent
      },
    ]
  },

  //www.blabla.com/admin
  {
    path : "admin",
    component : AdminLayoutComponent,
    children :
    [
      //TODO:Write the admin component's routings
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
