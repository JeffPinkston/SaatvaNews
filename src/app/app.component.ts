import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NewsService } from './news.service';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  articles = [];
  selectedArticle: Article;
  articlesSubscrption: Subscription;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.articlesSubscrption = this.newsService.fetchArticles().subscribe(
      news => {
        for (const article of news['articles']) {
          this.articles.push(article);
        }
        this.selectedArticle = this.articles[0];
        // this.newsService.setArticle(this.selectedArticle);
      }
    );
  }

  selectArticle(index: number) {
    this.selectedArticle = this.articles[index];
    // this.newsService.setArticle(this.selectedArticle);
  }

  ngOnDestroy() {
    this.articlesSubscrption.unsubscribe();
  }
}
