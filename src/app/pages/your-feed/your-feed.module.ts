import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { YourFeedComponent } from './your-feed.component';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  declarations: [YourFeedComponent],
  exports: [YourFeedComponent]
})
export class YourFeedModule {}
