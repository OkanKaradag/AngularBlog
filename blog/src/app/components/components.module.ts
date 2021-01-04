import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuCategoryComponent } from './menu-category/menu-category.component';

@NgModule({
  declarations: [MenuCategoryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuCategoryComponent]
})
export class ComponentsModule { }
