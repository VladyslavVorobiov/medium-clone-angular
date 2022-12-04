import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IArticleBase } from 'src/app/shared/interfaces/article-base.interface';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateArticleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(value: IArticleBase): void {
    console.log(value);
  }
}
