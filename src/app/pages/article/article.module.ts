import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';

import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleComponent } from './article.component';
import { reducers } from './store/reducers/reducers';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [SharedArticleService]
})
export class ArticleModule {}
