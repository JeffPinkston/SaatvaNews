import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Article } from '../article.model';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter<void>();
  @Input() articles: Article[];

  constructor() { }

  onClose() {
    this.sidenavClose.emit();
  }

}
