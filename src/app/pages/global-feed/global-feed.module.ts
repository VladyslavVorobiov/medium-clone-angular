import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { GlobalFeedComponent } from './global-feed.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
  declarations: [GlobalFeedComponent],
  exports: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
