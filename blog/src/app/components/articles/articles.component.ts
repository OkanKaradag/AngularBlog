import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';

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
  defaultArticleImageUrl = "/assets/emptyArticle.jpg";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  pageChanged(event: any) {
    this.page = event;
    this.router.navigateByUrl(`/page/${this.page}`);
  }
}
