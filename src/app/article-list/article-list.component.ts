import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Output() articleSelected = new EventEmitter<number>();
  @Input() articles = [];
  selectedIndex = 0;

  constructor() { }

  selectArticle(index) {
    this.articleSelected.emit(index);
    this.selectedIndex = index;
  }


}
