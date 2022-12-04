import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module';
import { EditArticleComponent } from './edit-article.component';
import { reducers } from './store/reducers/reducers';
import { EditArticleService } from './services/edit-article.service';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    ArticleFormModule,
    LoadingModule,
    BackendErrorMessagesModule
  ],
  declarations: [EditArticleComponent],
  exports: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule {}
