import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article:Article;
  category:Category;

  constructor(public articleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.articleService.loading = true;
      let articleId = Number(this.route.snapshot.paramMap.get("id"));

      this.articleService.getArticle(articleId).subscribe(response=>{
        this.article = response;
        this.category = response.category;
      });
    });
  }

}
