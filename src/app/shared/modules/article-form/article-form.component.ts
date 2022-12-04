import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Output('articleSubmitted') articleSubmittedEvent: EventEmitter<IArticleBase> = new EventEmitter<IArticleBase>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: [this.valuesProp?.title || '', Validators.required],
      description: [this.valuesProp?.description || '', Validators.required],
      body: [this.valuesProp?.body || '', Validators.required],
      tagList: this.valuesProp?.tagList?.join(' ') || ''
    });
  }

  onSubmit(): void {
    this.articleSubmittedEvent.emit({
      title: this.form.value.title,
      description: this.form.value.description,
      body: this.form.value.body,
      tagList: this.form.value.tagList.split(' ')
    });
  }
}
