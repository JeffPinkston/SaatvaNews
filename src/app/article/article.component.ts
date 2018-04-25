
import { Component, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() title: string;
  @Input() urlToImage: string;
  @Input() long_description: string;

  constructor() { }

}
