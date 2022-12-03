import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';
import { RouterModule, Routes } from '@angular/router';

import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  declarations: [CreateArticleComponent],
  exports: [CreateArticleComponent]
})
export class CreateArticleModule {}
