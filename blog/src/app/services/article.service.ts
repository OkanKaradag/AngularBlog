import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from '../models/pagination-response';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  loading: boolean = true;
  apiUrl = `${environment.baseApiUrl}/articles`;

  getArticles(page: number, pageSize: number) {
    let apiEndpoint = `${this.apiUrl}/${page}/${pageSize}`;
    return this.httpClient.get<PaginationResponse<Article>>(apiEndpoint).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
}
