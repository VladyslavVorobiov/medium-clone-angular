import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PopularTagsComponent } from './popular-tags.component';
import { PopularTagsService } from './services/popular-tags.service';
import { reducers } from './store/reducers/reducers';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
