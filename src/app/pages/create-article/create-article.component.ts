import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateArticleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
