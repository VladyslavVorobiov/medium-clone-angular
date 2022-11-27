import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { TagFeedComponent } from './tag-feed.component';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';
import { SLUG } from 'src/app/shared/constants/route.constants';

const routes: Routes = [
  {
    path: `tags/:${SLUG}`,
    component: TagFeedComponent
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
  declarations: [TagFeedComponent],
  exports: [TagFeedComponent]
})
export class TagFeedModule {}
