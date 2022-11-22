import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html'
})
export class TagListComponent {
  @Input('tags') tagsProp: string[] = [];
}
