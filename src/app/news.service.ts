import { Injectable, APP_INITIALIZER } from '@angular/core';

import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {
  newsUrl = 'https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json';
  private _article: Article;
  constructor(private http: HttpClient) { }

  fetchArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.newsUrl);
  }

  getArticle() {
    return this._article;
  }

  setArticle(article: Article) {
    this._article = article;
  }

}
