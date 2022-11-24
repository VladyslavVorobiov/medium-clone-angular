import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { GlobalFeedComponent } from './global-feed.component';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule, PopularTagsModule],
  declarations: [GlobalFeedComponent],
  exports: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
