import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  page = 1;
  articles: Article[];
  totalCount = 0;
  pageSize = 5;
  loadingItemCount: number = 5;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      var page = params.get('page');

      if (page) this.page = Number(page);

      if (this.totalCount > 0) {
        if (this.totalCount >= this.page * this.pageSize) {
          this.loadingItemCount = 5;
        } else {
          this.loadingItemCount = this.totalCount - (this.page - 1) * this.pageSize;
        }
      }

      this.articles = [];
      this.totalCount = 0;

      this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe((data) => {
          this.articles = data.response;
          this.totalCount = data.totalCount;
        });
    });
  }
}
