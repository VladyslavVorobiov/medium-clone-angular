import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './feed.component';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { reducers } from './store/reducers/reducers';
import { FeedService } from './services/feed.service';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffect]),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
