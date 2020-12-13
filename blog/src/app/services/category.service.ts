import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../models/category'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  public getCategories(){
    let url = `${environment.baseApiUrl}/categories`;
    return this.httpClient.get<Category[]>(url);
  }

  public getCategoryById(id: number){
    let url = `${environment.baseApiUrl}/categories/${id}`;
    return this.httpClient.get<Category>(url);
  }
}
