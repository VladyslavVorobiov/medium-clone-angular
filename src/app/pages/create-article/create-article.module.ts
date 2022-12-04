import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { reducers } from './store/reducers/reducers';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
    ArticleFormModule
  ],
  declarations: [CreateArticleComponent],
  exports: [CreateArticleComponent],
  providers: [CreateArticleService]
})
export class CreateArticleModule {}
