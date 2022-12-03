import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IArticleBase } from '../../interfaces/article-base.interface';
import { IBackendErrors } from '../../interfaces/backend-errors.interface';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFormComponent implements OnInit {
  @Input('values') valuesProp!: IArticleBase;
  @Input('isSubmitting') isSubmittingProp: boolean = false;
  @Input('errors') errorsProp!: IBackendErrors;

  constructor() {}

  ngOnInit() {}
}
