import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleComponent } from './article.component';
import { reducers } from './store/reducers/reducers';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    RouterModule,
    ErrorMessageModule,
    LoadingModule
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [SharedArticleService]
})
export class ArticleModule {}
