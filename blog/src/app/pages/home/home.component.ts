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

  constructor(
    private articleService: ArticleService,
    private activatedRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe((params) => {
      var page = params.get('page');

      if (page) this.page = Number(page);

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
