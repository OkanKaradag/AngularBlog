import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount: number;
  @Input() articles: Article[];
  @Input() page: number;
  @Input() pageSize: number;
  @Input() loadingItemCount: number;
  defaultArticleImageUrl = "/assets/emptyArticle.jpg";

  constructor(private router: Router, public articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.loading = true;
  }

  createRange() {
    var items: number[] = [];
    for (var i = 1; i <= this.loadingItemCount; i++) {
      items.push(i);
    }
    return items;
  }

  pageChanged(event: any) {
    this.articleService.loading = true;
    this.page = event;
    this.router.navigateByUrl(`/page/${this.page}`);
  }
}
