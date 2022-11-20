import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './feed.component';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';
import { FeedService } from './services/feed.service';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('feed', reducers), EffectsModule.forFeature([GetFeedEffect])],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
